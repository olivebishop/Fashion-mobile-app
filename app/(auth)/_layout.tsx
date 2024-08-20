import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
  <Stack screenOptions={{
    headerShown: false,
    animation: 'slide_from_right',
  }}>
    <Stack.Screen 
      name="signup" 
      options={{
        title: 'Create Account',
      }}
    />
    <Stack.Screen 
      name="login" 
      options={{
        title: 'Sign In',
      }}>
      </Stack.Screen>
  </Stack>
);
}