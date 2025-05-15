import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '../../../config/config.js';
import { Button, Input } from 'react-native-elements';

export default function Recover({ navigation }) {
  const [email, setEmail] = useState('');
  const auth = getAuth(app);
  const handleRecoverPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('E-mail de recuperação enviado com sucesso!');
        navigation.navigate('login');
      })
      .catch((error) => {
        alert('Erro ao enviar e-mail de recuperação', error.message);
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