import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const VerifyCode = () => {
  return (
    <View className="flex-1 justify-center px-8">
      <Text className="text-3xl font-semibold text-center mb-8">Verify Code</Text>
      <Text className="text-center text-gray-600 mb-8">Please enter the code sent to your email@example.com</Text>
      
      <View className="flex-row justify-center space-x-4 mb-8">
        {/* Code Input Fields */}
        {Array(4).fill().map((_, index) => (
          <TextInput 
            key={index}
            className="border border-gray-300 rounded-full w-14 h-14 text-center text-2xl"
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
      
      <Text className="text-center text-amber-950 mb-8">Didn't receive OTP? Resend Code</Text>
      
      <TouchableOpacity className="bg-amber-950 py-4 rounded-full">
        <Text className="text-white text-center font-bold">Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyCode;
