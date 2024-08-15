import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Auth = () => {
  return (
    <View>
      <Text>Auth</Text>
      <Link href="/auth">Go to Home</Link>
    </View>
  )
}

export default Auth