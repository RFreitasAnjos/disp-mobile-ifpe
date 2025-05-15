import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import  { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import the pages 
import Register from './src/templates/pages/Register';
import Login from './src/templates/pages/Login';
import ContactUpdate from './src/templates/pages/ContactUpdate';
import { SafeAreaView } from 'react-native';
import Recover from './src/templates/pages/Recover';
import ContactList from './src/templates/pages/ContactList';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: true,
            headerRight: () => (
              <Ionicons
                name="notifications-outline"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
            ),
          }}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="contactsUpdate" component={ContactUpdate}/>
        <Stack.Screen name="ContactList" component={ContactList} />
        <Stack.Screen name="Recover" component={Recover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

