import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import BingoScreen from '../screens/homeScreen/BingoScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';


import RegistrationScreen from '../screens/auth/RegistrationScreen';
import BingoStack from '../stacks/BingoStack'

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="SighnUp" component={RegistrationScreen} />
        {/* <Stack.Screen name="TaskPanel" component={BingoScreen} /> */}
        <Stack.Screen name="Home" component={BingoStack} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
