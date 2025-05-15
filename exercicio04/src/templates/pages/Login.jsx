import React, { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Avatar, Text, Input } from "react-native-elements";
import { Button, ListItem } from "@rneui/themed";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import { Link, LinkingContext, NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { useState } from "react";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';import { SafeAreaView, TextInput } from "react-native-web";
import { app, analytics } from '../../../config/config';

const Login = ({navigation}) => {
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Login realizado', `Bem-vindo, ${user.email}`);
        navigation.navigate('ContactList');
      })
      .catch((error) => {
        alert('Erro ao entrar', error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
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
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={style.input}
          autoCompleteType="email"
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          keyboardType="email-address"
          secureTextEntry 
          style={style.input}
          />
      </View>
      <View style={style.buttons}>
        <Button
          title="Entrar"
          onPress={handleLogin}/>
        <Button
          title="Cadastre-se"
          buttonStyle={{ backgroundColor: "#FF0000" }}
          onPress={() => {
            navigation.navigate('Register')
        }}/>
        <Button 
          title="Recuperar Senha"
          buttonStyle={{ backgroundColor: "#ffc107" }}
          onPress={() => {
            navigation.navigate('Recover')
        }}/>
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