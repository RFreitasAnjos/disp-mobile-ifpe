import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '../../config/config';
import { Button, Input } from 'react-native-elements';

 const Recover = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const auth = getAuth(app);
  const handleRecoverPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('E-mail de recuperação enviado com sucesso!');
        navigation.navigate('login');
      })
      .catch((error) => {
        Alert.alert('Erro ao enviar e-mail de recuperação', error.message);
      });
  };
  return (
    <View style={style.container}>
      <View style={style.form}>
        <Text>Recuperar Senha</Text>
        <Text>E-mail</Text>
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={style.input}
          autoCompleteType="email"
        />
      </View>
      <View>
        <Button
          style={style.buttons}
          title="Recuperar Senha"
          onPress={handleRecoverPassword} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  buttons: {
    width: '100%',
  },
});
export default Recover;