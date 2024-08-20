import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { styled } from 'nativewind';
import { Link } from 'expo-router';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledSafeAreaView = styled(SafeAreaView)

const WelcomeScreen = () => {
  return (
    <StyledSafeAreaView className="flex-1 bg-white">
      <StyledView className="flex-row justify-center items-center mt-10">
        <StyledImage
          source={require("../../assets/images/one.jpg")}
          className="w-36 h-72 rounded-3xl"
          style={{ transform: [{ rotate: "-10deg" }] }}
        />
        <StyledView className="ml-4 space-y-4">
          <StyledImage
            source={require("../../assets/images/two.jpg")}
            className="w-24 h-48 rounded-full"
            style={{ transform: [{ rotate: "10deg" }] }}
          />
          <StyledImage
            source={require("../../assets/images/three.jpg")}
            className="w-24 h-48 rounded-full"
            style={{ transform: [{ rotate: "0deg" }] }}
          />
        </StyledView>
      </StyledView>
      <StyledView className="flex-1 justify-end items-center px-5 pb-10">
        <StyledText className="text-4xl font-bold text-center mb-2">
          The <StyledText className="text-amber-950">Fashion App</StyledText>{" "}
          That Makes You Look Your Best
        </StyledText>
        <StyledText className="text-base text-center mb-5 text-gray-600">
          Unleash your inner style icon with curated fashion looks, personalized
          just for you.
        </StyledText>
        <Link href="/(auth)/signup" asChild>
        <TouchableOpacity className="bg-amber-950 py-3 px-24 rounded-full mb-4">
          <Text className="text-white text-lg font-bold">
            Let's Get Started
          </Text>
        </TouchableOpacity>
        </Link>
        <Link href="/(auth)/login" asChild>
        <TouchableOpacity>
          <StyledText className="text-black text-base">
            Already have an account?{" "}
            <Text className="text-amber-950 underline">
              Sign in
            </Text>
          </StyledText>
        </TouchableOpacity>
        </Link>
      </StyledView>
    </StyledSafeAreaView>
  );
};

export default WelcomeScreen;
