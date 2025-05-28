import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputPassword = ({value, setPassword, isSecure, setIsSecure}) => {
  return (
    <View style={styles.inputContainer}>
      <Ionicons
        name="lock-closed-outline"
        size={24}
        color="gray"
        style={styles.icon}
      />
      <TextInput
        placeholder="Password"
        value={value}
        onChangeText={setPassword}
        secureTextEntry={isSecure}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
        <Ionicons
          name={isSecure ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          color="gray"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
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

export default InputPassword;
