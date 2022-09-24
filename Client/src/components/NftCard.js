import {
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {useEffect, useState} from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NftCard = ({el, navigation, count}) => {
  const moveDetail = () => {
    navigation.navigate('DetailPage', {
      totalTokens: count[el.id],
      external_id: el.external_id,
      total_volume: el.total_volume,
      one_day_change: el.one_day_change,
    });
  };
  
  return (
    <TouchableOpacity style={styles.containerNft} onPress={() => moveDetail()}>
      <View
        style={[
          tw`w-11/12 h-8/12 rounded-2xl`,
          {marginTop: windowHeight * 0.02, marginLeft: windowWidth * 0.035},
        ]}>
        <Image
          source={{
            uri: el.image_url,
          }}
          style={tw`w-full h-full rounded-2xl`}
        />
        <Text style={tw`text-black text-2xl text-center font-bold mt-1`}>
          {el.name}{' '}
          <Icon
            style={tw`m-auto ml-1`}
            name="check-circle"
            size={20}
            color="#38bdf8"
          />
        </Text>
        <Text style={tw`text-gray-400 text-base text-center font-bold`}>
          {el.opensea_slug}
        </Text>
        <Text style={tw`text-rose-400 text-base text-center font-bold`}>
          {count[el.id]} <Icon2 name="coins" size={16} />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerNft: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.43,
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: '#000',
    marginLeft: windowWidth * 0.05,
    marginBottom: windowHeight * 0.03,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
export default NftCard;
