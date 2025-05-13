import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/templates/pages/Login';
import { useState } from 'react';
import Register from './src/templates/pages/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name ="login"
          component={Login}
          options={{
            headerShown: false,
          headerRight: () => (
            <Ionicons
              name="notifications-outline"
              size={24}
              color="black"
              style={{marginRight: 10}}
              />
          )}
        }/>
        <Stack.Screen
         name="Register"
        component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


