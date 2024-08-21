import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';

type CardContent = {
  title: string;
  description: string;
  image: any;
};

const cardData: CardContent[] = [
  {
    title: "Fresh Arrivals",
    description: 'Discount 50% for the first transactions',
    image: require('../assets/images/one.jpg'),
  },
  {
    title: "Buy One offer",
    description: "Amazing deals on our latest collection",
    image: require('../assets/images/one.jpg'),
  },
  {
    title:"Summer Spectacular",
    description:  "Heat up your style with our Summer Sale!",
    image: require('../assets/images/one.jpg'),
  },
  {
    title: "Limited Edition ",
    description: "Exclusive pieces just for you",
    image: require('../assets/images/one.jpg'),
  },
  {
    title: "Exclusive Offers",
    description: "Unbeatable deals for a limited time",
    image: require('../assets/images/one.jpg'),
  },
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === cardData.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / windowWidth);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={{ width: windowWidth }}
        contentOffset={{ x: currentIndex * windowWidth, y: 0 }}
      >
        {cardData.map((card, index) => (
          <View key={index} style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={card.image} style={styles.image} />
              <View style={styles.content}>
                <Text style={styles.title}>{card.title}</Text>
                <Text style={styles.description}>{card.description}</Text>
                <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
                  <Text style={styles.buttonText}>Shop Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.paginationContainer}>
        {cardData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex ? styles.activePaginationDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
  },
  cardContainer: {
    width: Dimensions.get('window').width - 32,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFECB3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row-reverse',
  },
  image: {
    width: '50%',
    height: 250,
    resizeMode: 'cover',
  },
  content: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#424242',
  },
  description: {
    marginTop: 8,
    color: '#757575',
  },
  button: {
    backgroundColor: '#4E342E',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  paginationContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  activePaginationDot: {
    backgroundColor: '#4E342E',
  },
});

export default CardCarousel;