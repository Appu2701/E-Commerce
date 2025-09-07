import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { TestScreenNavigationProp } from '../types/navigation'
import { useNavigation } from '@react-navigation/native';

const Test = () => {
  const navigation = useNavigation<TestScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test</Text>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Login')}}>
        <Text style={styles.buttonText}>Login </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('SignUp') }}>
        <Text style={styles.buttonText}>Sign UP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('ForgetPassword') }}>
        <Text style={styles.buttonText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Home') }}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
