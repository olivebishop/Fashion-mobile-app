import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const NewPassword = () => {
  return (
    <View className="flex-1 justify-center px-8">
      <Text className="text-3xl font-semibold text-center mb-8">New Password</Text>
      <Text className="text-center text-gray-600 mb-8">Please enter your new password below</Text>
      
      <TextInput 
        className="border border-gray-300 rounded-full px-4 py-3 mb-4" 
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput 
        className="border border-gray-300 rounded-full px-4 py-3 mb-8" 
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      
      <TouchableOpacity className="bg-amber-950 py-4 rounded-full">
        <Text className="text-white text-center font-bold">Create New Password</Text>
      </TouchableOpacity>
        <Link href="/(auth)/verify-code" className="text-amber-950  mt-3 ml-5">
          Reset
        </Link>
    </View>
  );
};

export default NewPassword;
