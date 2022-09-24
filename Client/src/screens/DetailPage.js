import {
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import TokenCard from '../components/TokenCard';
import {useRoute} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import url from '../constants/url';
import {LineChart} from 'react-native-chart-kit';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailPage = ({navigation}) => {
  const route = useRoute();
  const [details, setDetails] = useState({});
  const [tokens, setTokens] = useState([]);
  const [stats, setStats] = useState([]);
  const [dataChart, setDataChart] = useState([]);
  const [dateStats, setDateStats] = useState([]);
  const [interval, setInterval] = useState(2)

  const fetchDetails = async () => {
    try {
      let {data} = await axios.get(
        url + `/j3Iz08/collections?external_id=${route.params.external_id}`,
      );
      setDetails(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTokens = async () => {
    try {
      let {data} = await axios.get(url + '/jlEsLB/wallet_content');
      data = data.filter(
        el =>
          JSON.parse(el.collection_json).external_id ===
          route.params.external_id,
      );
      setTokens(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStats = async () => {
    try {
      let {data} = await axios.get(url + `/ELI42D/collection_stats?collection_id=${details.id}`)
      data = data.slice(0, interval)
      let chartData = data.map(el => {
        return el.floor_price_eth
      })
      let dates = data.map(el => {
        return el.timestamp.slice(0, 4)
      })
      setDateStats(dates)
      setDataChart(chartData)
      setStats(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDetails();
    fetchTokens();
  }, []);

  useEffect(() => {
    fetchStats()
  }, [details.id, interval])


  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 255) => `rgba(238, 32, 255, ${opacity})`,
    strokeWidth: 4,
    barPercentage: 1,
  };

  const data = {
    labels: dateStats,
    datasets: [
      {
        data: dataChart,
        color: (opacity = 255) => `rgba(255, 3, 113, ${opacity})`,
        strokeWidth: 2,
        
      },
    ],
  };

  const dayStyle = () => {
    if (route.params.one_day_change < 0) {
      return `text-red-500 text-lg font-bold text-center`;
    } else {
      return `text-green-500 text-lg font-bold text-center`;
    }
  };
  return (
    <SafeAreaView  style={tw`bg-rose-400 bg-opacity-40 h-full`}>
      <View style={[styles.header]}>
        {details.id && (
          <ImageBackground
            blurRadius={4}
            source={{
              uri: details.banner_image_url,
            }}
            resizeMode="cover"
            style={tw`w-full h-full`}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomePage')}
              style={tw`w-8 h-8 bg-white items-center justify-center rounded-lg mt-2 ml-2`}>
              <Icon name="angle-left" size={30} color="black" />
            </TouchableOpacity>
            <Image
              source={{
                uri: details.image_url,
              }}
              style={[
                styles.profile,
                tw`m-auto border-4 mt-1 border-white rounded-xl`,
              ]}
            />
          </ImageBackground>
        )}
      </View>
      <View
        style={[
          styles.details,
          tw`bg-white m-auto -mt-10 rounded-xl shadow-lg flex flex-row items-center justify-center content-center`,
        ]}>
        <View style={tw`p-6`}>
          <Text style={tw`text-rose-400 text-sm font-semibold`}>ITEMS</Text>
          <Text style={tw`text-black text-lg font-bold text-center`}>
            {route.params.totalTokens}
          </Text>
        </View>
        <View style={tw`p-6`}>
          <Text style={tw`text-rose-400 text-sm font-semibold`}>
            TOTAL VOLUME
          </Text>
          <Text style={tw`text-black text-lg font-bold text-center`}>
            {Math.trunc(route.params.total_volume)}
          </Text>
        </View>
        <View style={tw`p-6`}>
          <Text style={tw`text-rose-400 text-base font-semibold`}>1 DAY</Text>
          <Text style={tw`${dayStyle()}`}>
            {parseFloat(route.params.one_day_change).toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={tw`flex flex-row items-center content-center justify-center mt-2 shadow-xl`}>
        <TouchableOpacity onPress={() => setInterval(2)} style={tw`w-12 h-10 bg-white mt-2 rounded-lg shadow-lg m-1 text-center items-center content-center justify-center`}>
          <Text style={tw`text-black font-bold text-base`}>1d</Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => setInterval(7)} style={tw`w-12 h-10 bg-white mt-2 rounded-lg shadow-lg m-1 text-center items-center content-center justify-center`}>
          <Text style={tw`text-black font-bold text-base`}>7d</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setInterval(30)} style={tw`w-12 h-10 bg-white mt-2 rounded-lg shadow-lg m-1 text-center items-center content-center justify-center`}>
          <Text style={tw`text-black font-bold text-base`}>30d</Text>
        </TouchableOpacity>
      </View>

      {
        dataChart.length !== 0 &&
      <LineChart
        data={data}
        width={windowWidth}
        height={220}
        chartConfig={chartConfig}
        withInnerLines={false}
        withOuterLines={false}
        style={tw`mt-4 mb-4 bg-transparent`}
      />
      }
      {tokens.length !== 0 && (
        <ScrollView horizontal={true}>
          {tokens.map(el => (
            <TokenCard el={el} key={el.id} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.23,
  },
  profile: {
    width: windowWidth * 0.228,
    height: windowHeight * 0.11,
  },
  details: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.095,
  },
  tokens: {
    width: windowWidth * 0.47,
    height: windowHeight * 0.23,
  },
});
export default DetailPage;
