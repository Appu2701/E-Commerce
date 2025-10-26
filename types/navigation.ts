import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
  Test: undefined;
  Profile: undefined;
  Orders: undefined;
  Address: undefined;
  Cart: undefined;
  Wishlist: undefined;
  Grocery: undefined;
  Electronics: undefined;
  Sports: undefined;
  Fashion: undefined;
  Mobiles: undefined;
  Furniture: undefined;
  Books: undefined;
  Toys: undefined;

};

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;
export type ForgetPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgetPassword'>;
export type TestScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Test'>;
export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
export type OrdersScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Orders'>;
export type AddressScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Address'>;
export type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;
export type WishlistScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Wishlist'>;
export type GroceryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Grocery'>;
export type ElectronicsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Electronics'>;
export type SportsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Sports'>;
export type FashionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Fashion'>;
export type MobilesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Mobiles'>;
export type FurnitureScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Furniture'>;
export type BooksScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Books'>;
export type ToysScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Toys'>;