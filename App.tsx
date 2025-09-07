import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from './types/navigation';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Test from './Screens/Test';
import SignUp from './Screens/SignUp';
import ForgetPassword from './Screens/ForgetPassword';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
