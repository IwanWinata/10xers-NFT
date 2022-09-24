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

const TokenCard = ({el}) => {
  return (
    <View style={[styles.tokens, tw`m-2`]}>
      <ImageBackground
        imageStyle={{borderRadius: 30}}
        source={{
          uri: el.image_url,
        }}
        style={tw`w-full h-full`}>
        <Text
          style={tw`absolute bottom-2 right-4 text-white text-lg bg-black py-1 px-1.5 rounded-xl font-bold bg-opacity-75`}>
          <Icon name="diamond" size={18} style={tw`m-auto`} color="#67e8f9" /> #
          {el.token_id}
        </Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  tokens: {
    width: windowWidth * 0.47,
    height: windowHeight * 0.23,
  },
});
export default TokenCard;
