import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#1f1f1f',
          borderRadius: 40,
          height: 60,
        },
        tabBarActiveTintColor: '#b5651d',
        tabBarInactiveTintColor: '#e0e0e0',
        headerShown: false, // This will hide the header
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-bag" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="comments" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
