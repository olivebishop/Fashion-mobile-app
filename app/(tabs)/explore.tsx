import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Image, Text, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CardCarousel from '../../components/Slider';

// Define TypeScript types for the product data
interface Product {
  id: string;
  title: string;
  price: string;
  image: any;
}

const exploreData: Product[] = [
  {
    id: '1',
    title: 'Hooded Jacket',
    price: '$99.99',
    image: require('../../assets/images/one.jpg'),
  },
  {
    id: '2',
    title: 'Casual Shirt',
    price: '$49.99',
    image: require('../../assets/images/one.jpg'),
  },
  {
    id: '3',
    title: 'Skinny Jeans',
    price: '$79.99',
    image: require('../../assets/images/one.jpg'),
  },
  {
    id: '4',
    title: 'Ragged Jeans',
    price: '$20.78',
    image: require('../../assets/images/one.jpg'),
  },
  // Add more product data as needed
];

const Explore: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  // Define TypeScript type for renderItem's parameter
  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productContainer}
    >
      <Image
        source={item.image}
        style={styles.productImage}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="search" size={24} color="#b5651d" />
          </TouchableOpacity>
        </View>
        <CardCarousel />
      </View>
      <FlatList
        data={exploreData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        renderItem={renderItem}
      />
    </View>
  );
};
// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  } as ViewStyle,
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  } as ViewStyle,
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  } as ViewStyle,
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 9999,
    paddingHorizontal: 16,
  } as TextStyle,
  searchButton: {
    padding: 8,
  } as ViewStyle,
  productContainer: {
    width: '50%',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    marginHorizontal: 2,
  } as ViewStyle,
  productImage: {
    width: '100%',
    height: 144,
    resizeMode: 'cover',
  } as ImageStyle,
  productDetails: {
    padding: 16,
  } as ViewStyle,
  productTitle: {
    fontWeight: 'bold',
    color: '#1f2937',
  } as TextStyle,
  productPrice: {
    color: '#f97316',
  } as TextStyle,
  flatListContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    justifyContent: 'space-between',
  } as ViewStyle,
});

export default Explore;
