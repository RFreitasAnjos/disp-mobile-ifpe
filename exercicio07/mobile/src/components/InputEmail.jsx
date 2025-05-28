import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InputEmail = ({value, setEmail}) => {
    
    return (
        <View style={style.inputContainer}>
            <Ionicons 
                name="mail-outline"
                size={24}
                color="gray"
                style={style.icon}
            />
            <TextInput
                placeholder="E-mail"
                value={value}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={style.input}
                autoCompleteType="email"
            />
        </View>
    );
}

const style = StyleSheet.create({
    inputContainer: {
         flexDirection: "row",
         alignItems: "center",
         borderBottomWidth: 1,
         borderColor: "#ccc",
         paddingHorizontal: 10,
         marginVertical: 10,
     },
     input: {
         flex: 1,
         paddingVertical: 10,
         paddingHorizontal: 8,
     },
     icon: {
         paddingHorizontal: 5,
     }, 
 });
export default InputEmail;