import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { createUser } from '../../lib/auth';
const CreateAccount: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
;

const handleSignUp = async () => {
  if (!email || !password) {
    Alert.alert('Error', 'Please fill in all fields');
    return;
  }

  if (!agreeTerms) {
    Alert.alert('Error', 'Please agree to the Terms & Conditions');
    return;
  }

  try {
    await createUser(email, password);
    Alert.alert('Success', 'Account created successfully');
    router.push('/(setup)/profile-setup');
  } catch (error) {
    Alert.alert('Error', (error as Error).message || 'Failed to sign up');
  }
};

  return (
    <View className="flex-1 justify-center px-8">
      <Text className="text-3xl font-semibold text-center mb-8">Create Account</Text>
      
      <TextInput 
        className="border border-gray-300 rounded-full px-4 py-3 mb-4" 
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        className="border border-gray-300 rounded-full px-4 py-3 mb-4" 
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      
      <View className="flex-row items-center mb-4">
        <TouchableOpacity onPress={() => setAgreeTerms(!agreeTerms)}>
          <View className={`w-5 h-5 border border-gray-300 mr-2 ${agreeTerms ? 'bg-amber-950' : 'bg-white'}`} />
        </TouchableOpacity>
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