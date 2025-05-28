import { Button } from '@rneui/themed';
import {View, Text, StyleSheet} from 'react-native'
import { Image, Input } from "react-native-elements";
import { StatusBar } from "react-native-web";
import * as ImagePicker from 'expo-image-picker';

const Home = ({navigation}) => {
    return (
    <View style={style.container}>
        <Image source={{uri:'https://res.cloudinary.com/@exercice-disp/image/upload/cld-sample-4.jpg'}}></Image>
    </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Home;