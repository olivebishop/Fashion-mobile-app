import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ChatScreen = () => {
  return (
    <View className="flex-1 bg-[#F3F3F3] mt-8">
      {/* Header */}
      <View className="bg-[#8B5E34] p-4 flex-row items-center">
        <Image
          source={require('../../assets/images/three.jpg')} 
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <View className="ml-4">
          <Text className="text-white font-semibold">Angie Brekke</Text>
          <Text className="text-green-600 animate-pulse text-xs">Online</Text>
        </View>
        <TouchableOpacity className="ml-auto">
          <FontAwesome name="ellipsis-v" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <ScrollView className="flex-1 p-4">
        <View className="mb-4">
          <View className="flex-row items-center mb-2">
            <Image
              source={require('../../assets/images/three.jpg')}
              className="w-10 h-10 rounded-full"
            />
            <Text className="bg-gray-200 p-3 rounded-lg ml-2">
              Hello welcome to Fashion. How can i help you?
            </Text>
          </View>
          <Text className="text-xs text-gray-500 ml-12">08:04 pm</Text>
        </View>

        <View className="mb-4">
          <View className="flex-row items-center justify-end mb-2">
            <Text className="bg-[#8B5E34] text-white p-3 rounded-lg mr-2">
              I need a black mexican handbag or any Kenyan traditional handbag....
            </Text>
            <Image
              source={require('../../assets/images/two.jpg')}
              className="w-10 h-10 rounded-full"
            />
          </View>
          <Text className="text-xs text-gray-500 text-right mr-12">08:04 pm</Text>
        </View>

        <View className="mb-4">
          <View className="flex-row items-center mb-2">
            <Image
              source={require('../../assets/images/three.jpg')}
              className="w-10 h-10 rounded-full"
            />
            <View>
              <Text className="bg-gray-200 p-3 rounded-lg ml-2">
                Have a look at this 👇
              </Text>
              <Image
                source={require('../../assets/images/handbag.jpg')}
                className="w-40 h-40 rounded-lg ml-2 mt-2"
              />
            </View>
          </View>
          <Text className="text-xs text-gray-500 ml-12">08:04 pm</Text>
        </View>

        <View className="mb-4">
          <View className="flex-row items-center justify-end mb-2">
            <View className="bg-[#8B5E34] p-3 rounded-lg mr-2 ">
              <FontAwesome name="play" size={24} color="#fff" />
              <Text className="text-white mt-1">0:13</Text>
            </View>
            <Image
              source={require('../../assets/images/two.jpg')}
              className="w-10 h-10 rounded-full "
            />
          </View>
          <Text className="text-xs text-gray-500 text-right mr-12">08:04 pm</Text>
        </View>
      </ScrollView>

      {/* Message Input */}
      <View className="flex-row items-center p-4 bg-white mb-20">
        <TextInput
          className="flex-1 bg-gray-100 p-3 rounded-lg"
          placeholder="Type a message here..."
        />
        <TouchableOpacity className="ml-2 ">
          <FontAwesome name="microphone" size={24} color="#8B5E34" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;