import { View, Text, Settings } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{ 
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (<TabBarIcon name="home" color={"gray"} />),
          tabBarShowLabel: false 
         }}/>
        <Tabs.Screen name="jackson"  />
    </Tabs>
  )
}