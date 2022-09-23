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
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'twrnc';
import NftCard from '../components/NftCard';
import {FlatList} from 'react-native-gesture-handler';
import {useScrollToTop} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomePage = ({navigation}) => {
  const dummy = [
    {
      Name: 'Apple',
      Type: 'fruit',
      Price: 100,
    },
    {
      Name: 'pizza',
      Type: 'italian',
      Price: 370,
    },
    {
      Name: 'Burger',
      Type: 'Mac&Cheese',
      Price: 310,
    },
    {
      Name: 'salad',
      Type: 'Veg',
      Price: 50,
    },
  ];
  const renderItem = ({item}) => {
    return <NftCard navigation={navigation}/>;
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
      <FlatList
          data={dummy}
          renderItem={renderItem}
          keyExtractor={(item) => item.Name}
          ListFooterComponent={<View style={tw`mb-40`}></View>}
          ListHeaderComponent={<View style={tw`mb-4`}></View>}
        />
    </SafeAreaView>
  );
};
export default HomePage;
