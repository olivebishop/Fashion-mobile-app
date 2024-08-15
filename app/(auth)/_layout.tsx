import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="auth" />
    </Tabs>
  )
}

export default _layout