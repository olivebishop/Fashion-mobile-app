import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const CreateAccount = () => {
  const router = useRouter();

  const handleSignUp = () => {
    // Perform sign up logic here
    // Once sign up is successful, redirect to the 'explore' tab
    router.push('/(tabs)/explore');
  };

  return (
    <View className="flex-1 justify-center px-8">
      <Text className="text-3xl font-semibold text-center mb-8">Create Account</Text>
      
      <TextInput 
        className="border border-gray-300 rounded-full px-4 py-3 mb-4" 
        placeholder="Name"
      />
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
      
      <View className="flex-row items-center mb-4">
        <Text className="text-gray-600">Agree with <Text className="text-amber-950">Terms & Conditions</Text></Text>
      </View>
      
      <TouchableOpacity className="bg-amber-950 py-4 rounded-full mb-4" onPress={handleSignUp}>
        <Text className="text-white text-center font-bold">Sign Up</Text>
      </TouchableOpacity>
      
      <Text className="text-center text-gray-600">
        Already have an account? 
        <Link href="/(auth)/login" className="text-amber-950 underline">
          Sign In
        </Link>
      </Text>
    </View>
  );
};

export default CreateAccount;