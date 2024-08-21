import { EvilIcons, Ionicons, Octicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Image, Text, StyleSheet } from 'react-native';

const Explore = () => {
  const [searchText, setSearchText] = useState('');

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const exploreData = [
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
   
    // Add more product data as needed
  ];

  const categoryData = [
    {
      id: '1',
      title: 'T-Shirt',
      image: require('../../assets/images/one.jpg'),
    },
    {
      id: '2',
      title: 'Pant',
      image: require('../../assets/images/one.jpg'),
    },
    {
      id: '3',
      title: 'Dress',
      image: require('../../assets/images/one.jpg'),
    },
   
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.locationContainer}>
          <EvilIcons name="location" size={24} color="black" />
            <Text style={styles.locationText}>Mombasa, Kenya</Text>
          </View>
          <TouchableOpacity style={styles.notificationContainer}>
          <Ionicons name="notifications" size={24} color="#451a03" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchButton}>
          <Octicons name="filter" size={24} color="#451a03" />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <Image source={require('../../assets/images/one.jpg')} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>New Collection</Text>
            <Text style={styles.cardDescription}>Discount 50% for the first transaction</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Category</Text>
          <View style={styles.categoryList}>
            {categoryData.map((category) => (
              <TouchableOpacity style={styles.categoryItem} key={category.id}>
                <Image source={category.image} style={styles.categoryImage} />
                <Text style={styles.categoryItemText}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <FlatList
        data={exploreData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b5651d',
  },
  notificationContainer: {
    padding: 8,
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 9999,
    paddingHorizontal: 16,
  },
  searchButton: {
    padding: 8,
    marginLeft: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  cardContainer: {
    marginTop: 16,
    flexDirection: 'row',
    backgroundColor: '#FFECB3',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '50%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#424242',
  },
  cardDescription: {
    marginTop: 8,
    color: '#757575',
  },
  cardButton: {
    backgroundColor: '#4E342E',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginTop: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  categoryList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  categoryItemText: {
    marginTop: 4,
    color: '#1f2937',
  },
  productContainer: {
    width: '50%',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    marginHorizontal: 2,
  },
  productImage: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  productDetails: {
    padding: 16,
  },
  productTitle: {
    fontWeight: 'bold',
    color: '#1f2937',
  },
  productPrice: {
    color: '#f97316',
  },
  flatListContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
});

export default Explore;