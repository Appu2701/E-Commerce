import React from 'react'
import { View, Text } from 'react-native'

const Footer = () => {
  return (
    <View style={{height: 60, backgroundColor: '#f8f8f8', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderTopWidth: 1, borderColor: '#e7e7e7', marginBottom: 20}}>
      <Text style={{color: '#888'}}>© 2024 Your Company. All rights reserved.</Text>
    </View>
  )
}

export default Footer