import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


