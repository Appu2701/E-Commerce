import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
  Test: undefined;
  Profile: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;
export type ForgetPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgetPassword'>;
export type TestScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Test'>;
export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
