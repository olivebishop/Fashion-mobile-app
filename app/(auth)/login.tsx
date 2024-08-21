// SignIn.js
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SignIn = () => {
  const router = useRouter();

  const handleSignIn = () => {
    // Perform sign in logic here
    // Once sign in is successful, redirect to the 'explore' tab
    router.push('/(tabs)/explore');
  };

  return (
    <View className="flex-1 justify-center px-8">
      <Text className="text-3xl font-semibold text-center mb-8">Sign In</Text>
      <Text className="text-center text-gray-600 mb-8">Welcome back, you've been missed!</Text>
      
      <TextInput 
        className="border border-gray-300 rounded-full px-4 py-3 mb-4" 
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput 
        className="border border-gray-300 rounded-full px-4 py-3 mb-4" 
        placeholder="Password"
        secureTextEntry={true}
      />

      <Link href="/(auth)/new-password" className="text-right text-amber-950 mb-8">Forgot Password?</Link>
      
      <TouchableOpacity className="bg-amber-950 py-4 rounded-full mb-4" onPress={handleSignIn}>
        <Text className="text-white text-center font-bold">Sign In</Text>
      </TouchableOpacity>

      <Text className="text-center text-gray-600 mb-4">Or sign in with</Text>
      <View className="flex-row justify-center space-x-4 mb-8">
        {/* Social Login Buttons */}
        <View className="bg-gray-200 p-3 rounded-full">
          <FontAwesome name="github" size={24} color="black" />
        </View>
        <View className="bg-gray-200 p-3 rounded-full">
          <FontAwesome name="google" size={24} color="black" />
        </View>
      </View>
      
      <Text className="text-center text-gray-600">
        Don't have an account?
        <Link href="/(auth)/signup" className="text-amber-950 underline">
          Sign Up
        </Link>
      </Text>
    </View>
  );
};

export default SignIn;