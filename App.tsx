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
import WishList from './Screens/WishList';
import Grocery from './Screens/Category/Grocery';
import Electronics from './Screens/Category/Electronics';
import Books from './Screens/Category/Books';
import Toys from './Screens/Category/Toys';
import Furniture from './Screens/Category/Furniture';
import Mobiles from './Screens/Category/Mobiles';
import Fashion from './Screens/Category/Fashion';
import Sports from './Screens/Category/Sports';
import Store from './Screens/Store';

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
          <Stack.Screen name="Wishlist" component={WishList} />
          <Stack.Screen name="Store" component={Store} />
          <Stack.Screen name="Grocery" component={Grocery} />
          <Stack.Screen name="Electronics" component={Electronics} />
          <Stack.Screen name="Sports" component={Sports} />
          <Stack.Screen name="Fashion" component={Fashion} />
          <Stack.Screen name="Mobiles" component={Mobiles} />
          <Stack.Screen name="Furniture" component={Furniture} />
          <Stack.Screen name="Books" component={Books} />
          <Stack.Screen name="Toys" component={Toys} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </UserProvider>
  );
}
