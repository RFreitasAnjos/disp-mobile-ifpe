import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '../../../../Tela04/config/config';
import { Button, Input } from 'react-native-elements';

export default function Register({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(app);
    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('Usuário cadastrado com sucesso!');
            navigation.navigate('login');
        })
        .catch((error) => {
            alert('Erro ao cadastrar usuário', error.message);
        });
    };
    return (
        <View style={style.container}>
        <View style={style.form}>
            <Text>Registrar</Text>
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
            <Text>Senha</Text>
            <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={style.input}
            />
        </View>
        <View>
            <Button
            style={style.buttons}
            title="Registrar"
            onPress={handleRegister} />
        </View>
        </View>
    );
}