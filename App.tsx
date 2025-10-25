import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from './types/navigation';
import { UserProvider } from './context/UserContext';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Test from './Screens/Test';
import SignUp from './Screens/SignUp';
import ForgetPassword from './Screens/ForgetPassword';
import Profile from './Screens/Profile';
import Orders from './Screens/Orders';
import Address from './Screens/MyAddress';  
import Cart from './Screens/Cart';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="Address" component={Address} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </UserProvider>
  );
}
