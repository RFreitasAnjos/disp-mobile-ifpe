import React, { useState } from 'react';
import { View, TextInput, Button, Alert, SafeAreaView, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { color } from 'react-native-elements/dist/helpers';
import { useRoute } from '@react-navigation/native';
import {app, analytics} from '../../../config/config'

export default function LoginScreen({navigation}) {
  const route = useRoute();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = async () => {
    navigation.navigate('Register')
  }

  const handleLogin = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        alert('Login realizado', `Bem-vindo, ${user.email}`);
        navigation.navigate("contacts")
      })
      .catch((error) => {
        alert('Erro ao entrar', error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.buttons}>
            <Button title="Entrar" onPress={handleLogin} />

            <Button title="Cadastre-se" style={{color:'#FF0000'}} onPress={() => ("../pages/Register")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    marginHorizontal: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttons: {
    flex:1,
    height:40,
    marginHorizontal:50,
  }
});
