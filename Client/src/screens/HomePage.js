import {
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'twrnc';
import NftCard from '../components/NftCard';
import {FlatList} from 'react-native-gesture-handler';
import url from '../constants/url';
import axios from 'axios';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomePage = ({navigation}) => {
  const [collections, setCollections] = useState([]);
  const [count, setCount] = useState({});

  const fetchCollections = async () => {
    try {
      let {data} = await axios.get(url + '/jlEsLB/wallet_content');
      let colTemp = data.map(el => JSON.parse(el.collection_json));

      let count = {};
      colTemp.forEach(el => {
        count[el.id] = (count[el.id] || 0) + 1;
      });

      let result = [...new Map(colTemp.map(el => [el.id, el])).values()]
      setCount(count);
      setCollections(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  const renderItem = ({item}) => {
    return <NftCard navigation={navigation} el={item} count={count} />;
  };
  return (
    <SafeAreaView style={tw`bg-rose-400 bg-opacity-40`}>
      {/* HEADER */}
      <View style={tw`text-black font-bold m-4 mb-10 text-xl flex-row`}>
        <View style={tw`flex-col mt-4 ml-2`}>
          <Text style={tw`text-white font-bold text-4xl`}>Explore</Text>
          <Text style={tw`text-white font-bold text-4xl`}>Collections</Text>
        </View>
      </View>
      {collections.length !== 0 && (
        <FlatList
          data={collections}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={<View style={tw`mb-40`}></View>}
          ListHeaderComponent={<View style={tw`mb-4`}></View>}
        />
      )}
    </SafeAreaView>
  );
};
export default HomePage;
