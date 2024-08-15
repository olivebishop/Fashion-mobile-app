import React from 'react';
import { Text } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

export default function _layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: "home" | "home-outline" | "search" | "search-outline" | "add-circle" | "add-circle-outline" | "person" | "person-outline" = 'home-outline';

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'explore') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'addItem') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          const animatedStyle = useAnimatedStyle(() => {
            return {
              transform: [{ scale: withTiming(focused ? 1.2 : 1, { duration: 200 }) }],
            };
          });

          return (
            <AnimatedIcon
              name={iconName}
              size={size}
              color={color}
              style={animatedStyle}
            />
          );
        },
        tabBarLabel: ({ focused, color }) => {
          if (focused) {
            return null;
          }
          return (
            <Text style={{ color, fontSize: 12 }}>
              {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
            </Text>
          );
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          backgroundColor: '#f3f4f6',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="addItem" options={{ title: "Add Item" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}