import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, FlatList, ListRenderItem } from 'react-native';
import { router } from 'expo-router';
import { slides, Slide } from '../../utils/index';

const { width } = Dimensions.get('window');

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<Slide>>(null);

  const renderItem: ListRenderItem<Slide> = ({ item }) => (
    <View style={{ width, alignItems: 'center', padding: 20 }}>
      <Image source={item.image} style={{ width: 300, height: 500, resizeMode: 'contain' }} />
      <Text className="text-2xl font-bold mt-4 mb-2">
        <Text className={item.titleColor}>{item.title.split(' ')[0]}</Text>
        <Text> {item.title.split(' ').slice(1).join(' ')}</Text>
      </Text>
      <Text className="text-center text-gray-600">{item.description}</Text>
    </View>
  );
  

  const renderDots = () => (
    <View className="flex-row justify-center mt-4 mb-6">
      {slides.map((_, index) => (
        <View
          key={index}
          className={`h-2 w-2 rounded-full mx-1 ${
            index === currentIndex ? 'bg-amber-950 w-4' : 'bg-gray-300'
          }`}
        />
      ))}
    </View>
  );
  

  const handleNext = () => {
    if (currentIndex < slides.length - 1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push('/(onboarding)/welcome');
    }
  };

  return (
    <View className="flex-1">
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
      {renderDots()}
      <View className="absolute bottom-10 left-0 right-0 items-center">
        <TouchableOpacity
          className="bg-amber-950 py-3 px-8 rounded-full mb-3"
          onPress={handleNext}
        >
          <Text className="text-white font-bold">
            {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}