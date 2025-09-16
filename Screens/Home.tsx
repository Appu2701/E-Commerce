import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PageHeading from '../Components/PageHeading'
import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <PageHeading />
      {/* <ScrollView contentContainerStyle={styles.container}>
        <View style={{ height: 1200 , width: '100%', backgroundColor: '#24a720ff' }} />
        <Text style={styles.title}>Welcome to Home!</Text>
      </ScrollView> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})