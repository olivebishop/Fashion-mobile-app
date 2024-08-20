import React from 'react';
import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      animation: 'slide_from_right',
    }}>
      <Stack.Screen 
        name="welcome" 
        options={{
          title: 'Welcome',
        }}
      />
      <Stack.Screen 
        name="onboarding" 
        options={{
          title: 'Onboarding',
        }}
      />
    </Stack>
  );
}