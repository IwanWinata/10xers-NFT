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
  import Icon from 'react-native-vector-icons/FontAwesome';
  import tw from 'twrnc';
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
const TokenCard = () => {
    return (
        <View style={[styles.tokens, tw`m-2 rounded-xl`]}>
          <ImageBackground
          imageStyle={{borderRadius: 30}}
            source={{
              uri: `https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120`,
            }}
            style={tw`w-full h-full`}
          >

          <Text style={tw`absolute bottom-2 right-4 text-white text-lg bg-black py-1 px-1.5 rounded-xl font-bold bg-opacity-75`}><Icon name='diamond' size={18} style={tw`m-auto`} color="#67e8f9"/> #3608</Text>
          </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    tokens: {
      width: windowWidth * 0.47,
      height: windowHeight * 0.23,
    },
  });
export default TokenCard