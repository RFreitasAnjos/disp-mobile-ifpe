import React, { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList, Alert, TouchableOpacity } from "react-native";
import { Avatar, Text, Input } from "react-native-elements";
import { Button, ListItem } from "@rneui/themed";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import { Link, LinkingContext, NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { useState } from "react";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';import { SafeAreaView, TextInput } from "react-native-web";
import { app, analytics } from '../../config/config';
import InputPassword from "../components/InputPassword";
import InputEmail from "../components/InputEmail";
import ButtonRecover from "../components/ButtonRecover";

const Login = ({navigation}) => {
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSecure, setIsSecure] = useState(true);

  const handleLogin = async () => {
    if(email === "" || password === "") {
      Alert.alert("Erro",'Preencha todos os campos');
      return navigation.navigate('Login');
    }
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert('Login realizado', `Bem-vindo, ${user.email}`);
        navigation.navigate('Send');
      })
      .catch((error) => {
        if(error.code === 'auth/invalid-email') {
          Alert.alert('Email inválido');
        }
        if(error.code === 'auth/wrong-password') {
          Alert.alert('Senha incorreta');
        }


      });
  }

  return (  
    <View style={style.container}>
      <View>
        <Avatar
          size={100}
          rounded
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          containerStyle={{ marginBottom: 20 }}
        />
      </View>
      <View style={style.form}>
      <View>
        <InputEmail value={email} setEmail={setEmail}/>
        <InputPassword value={password} setPassword={setPassword} isSecure={isSecure} setIsSecure={setIsSecure}/>
      </View>
      <View style={style.buttons}>
        <Button
          title="Entrar"
          onPress={()=> {
            handleLogin();
          }}/>
        <Button
          title="Cadastre-se"
          buttonStyle={{ backgroundColor: "#FF0000" }}
          onPress={() => {
            navigation.navigate('Register')
        }}/>
        <ButtonRecover navigation={navigation}></ButtonRecover>
      </View>
    </View>
      </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "80%",
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
});
export default Login;