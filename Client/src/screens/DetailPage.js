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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailPage = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={[styles.header]}>
        <ImageBackground
          blurRadius={4}
          source={{
            uri: 'https://lh3.googleusercontent.com/H4Iu36XQNJqVlF99-0BuQna0sUlUcIrHt97ss3le_tAWw8DveEBfTktX3S0bP6jpC9FhN1CKZjoYzZFXpWjr1xZfQIwSSLeDjdi0jw=s2500',
          }}
          resizeMode="cover"
          style={tw`w-full h-full`}>
          <Image
            source={{
              uri: `https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120`,
            }}
            style={[
              styles.profile,
              tw`m-auto border-4 border-white rounded-xl`,
            ]}
          />
        </ImageBackground>
      </View>
      <View
        style={[
          styles.details,
          tw`bg-white m-auto -mt-8 rounded-xl shadow-lg flex flex-row items-center justify-center content-center`,
        ]}>
        <View style={tw`p-6`}>
          <Text style={tw`text-gray-400 text-base font-semibold`}>HALO</Text>
          <Text style={tw`text-black text-lg font-bold text-center`}>2</Text>
        </View>
        <View style={tw`p-6`}>
          <Text style={tw`text-gray-400 text-base font-semibold`}>HALO</Text>
          <Text style={tw`text-black text-lg font-bold text-center`}>2</Text>
        </View>
        <View style={tw`p-6`}>
          <Text style={tw`text-gray-400 text-base font-semibold`}>HALO</Text>
          <Text style={tw`text-black text-lg font-bold text-center`}>2</Text>
        </View>
      </View>
      <ScrollView horizontal={true}>
        <TokenCard/>
        <TokenCard/>
        <TokenCard/>
        <TokenCard/>
      </ScrollView>
      <TouchableOpacity style={tw`w-5/6 h-10 bg-rose-400 rounded-lg m-auto mt-4 shadow-xl`} onPress={() => navigation.navigate("HomePage")}>
        <Text style={tw`text-white m-auto font-bold text-xl`}>Discover More</Text>
      </TouchableOpacity>
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
