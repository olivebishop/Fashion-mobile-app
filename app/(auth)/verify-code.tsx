import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

const VerifyCode: React.FC = () => {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const [resendTime, setResendTime] = useState<number>(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setResendTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCodeChange = (index: number, value: string) => {
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);
  };

  const handleVerify = () => {
    // Check if the entered code matches the expected code
    const expectedCode = '1234';
    if (code.join('') === expectedCode) {
      // Redirect to the 'explore' tab
      router.push('/(tabs)/explore');
    } else {
      Alert.alert('Invalid Code', 'Please enter the correct code.');
    }
  };

  const handleResendCode = () => {
    if (resendTime === 0) {
      // Resend the code and reset the timer
      setResendTime(60);
      Alert.alert('Code Resent', 'A new code has been sent to your email.');
    } else {
      Alert.alert('Wait for 1 minute', `Please wait ${resendTime} seconds to resend the code.`);
    }
  };

  return (
    <View className="flex-1 justify-center px-8">
      <Text className="text-3xl font-semibold text-center mb-8">Verify Code</Text>
      <Text className="text-center text-gray-600 mb-8">Please enter the code sent to your email@example.com</Text>

      <View className="flex-row justify-center space-x-4 mb-8">
        {code.map((_, index) => (
          <TextInput
            key={index}
            className="border border-gray-300 rounded-full w-14 h-14 text-center text-2xl"
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handleCodeChange(index, value)}
            value={code[index]}
          />
        ))}
      </View>

      <TouchableOpacity className="text-center mb-8" onPress={handleResendCode}>
        {resendTime === 0 ? (
          <Text className="text-amber-950">Didn't receive OTP? Resend Code</Text>
        ) : (
          <Text className="text-gray-600">Resend Code in {resendTime} seconds</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity className="bg-amber-950 py-4 rounded-full" onPress={handleVerify}>
        <Text className="text-white text-center font-bold">Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyCode;