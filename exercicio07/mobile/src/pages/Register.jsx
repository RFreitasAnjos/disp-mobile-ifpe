import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, analytics } from '../../config/config';
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Register = ({navigation}) =>{

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Usuário cadastrado com sucesso!');
            const user = userCredential.user;
            navigation.navigate('login');
        })
        .catch((error) => {
            alert('Erro ao cadastrar usuário', error.message);
            console.error('Error:', error);
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    };
    return (
        <View style={style.container}>
        <View style={style.form}>
            <Input
            placeholder="Nome"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
            style={style.input}
            />
            <Input
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
            />
            <Input
            placeholder="E-mail"
            onChangeText={setEmail}
            style={style.input}
            />
            <Input
            placeholder="Senha"
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
        marginTop: 10,
    },
});

export default Register;