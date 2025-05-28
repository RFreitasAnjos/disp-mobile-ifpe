import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import pages
import Home from './src/pages/Home'
import Login from './src/pages/Login';
import Register from './src/pages/Register'
import Recover from './src/pages/Recover'
import Send from './src/pages/Send';
import Update from './src/pages/Update';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} options={{
          headerShown:true,
          headerRight: () => (
              <Ionicons
                name="ios-person-add"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
            ),
        }}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Recover' component={Recover}/>
        <Stack.Screen name='Send' component={Send}/>
        <Stack.Screen name='Update' component={Update}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
