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
  StyleSheet
} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NftCard = ({el, navigation}) => {
  return (
    <TouchableOpacity style={styles.containerNft} onPress={() => navigation.navigate("DetailPage")}>
    <View
      style={[
        tw`w-11/12 h-8/12 rounded-2xl`,
        {marginTop: windowHeight * 0.02, marginLeft: windowWidth * 0.035},
      ]}>
      <Image
        source={{
          uri: `https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120`,
        }}
        style={tw`w-full h-full rounded-2xl`}
      />
      <Text style={tw`text-black text-2xl text-center font-bold mt-2`}>Cool Cats NFT <Icon style={tw`m-auto ml-1`} name="check-circle" size={20} color="#38bdf8"/></Text>
      <Text style={tw`text-gray-400 text-base text-center font-bold`}>cool-cats-nft</Text>
    </View>
  </TouchableOpacity>
  )
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
