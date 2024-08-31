import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'OIL',
    subtitle: 'Cooking Oil',
    image: 'https://t4.ftcdn.net/jpg/05/42/73/41/240_F_542734193_9NzRbe1plvRM1yOB73FDDPxqulDG0Pld.jpg' // Replace with actual image URL
  },
  {
    id: '2',
    title: 'buckwheat',
    subtitle: 'buckwheat',
    image: 'https://as2.ftcdn.net/v2/jpg/08/28/52/43/1000_F_828524333_p9NMy8W3lXaekPRj1LEYkdnFverDYbNd.jpg' // Replace with actual image URL
  },
  {
    id: '3',
    title: 'Food',
    subtitle: 'Food',
    image: 'https://as1.ftcdn.net/v2/jpg/04/87/35/58/1000_F_487355847_Jzh5FdJ7gGAGO4JvVD67PIaR3xkWX1OH.jpg' // Replace with actual image URL
  },
];

export default function Explore() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlideIndex(slideIndex);
  };

  const renderSlide = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: item.image }}
        style={styles.planetImage}
      />
      <Text style={styles.planetName}>{item.title}</Text>
      <Text style={styles.planetSubtitle}>{item.subtitle}</Text>
      <TouchableOpacity style={styles.knowMoreButton}>
        <Text style={styles.knowMoreText}>Know more →</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <Text style={styles.headerSubtitle}>Products</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item) => item.id}
        style={{ flexGrow: 0 }}
      />

      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentSlideIndex === index
                ? styles.activeDot
                : styles.inactiveDot
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A74DA',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#D8D8D8',
    marginTop: 4,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: width * 0.8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    marginHorizontal: width * 0.1,
  },
  planetImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  planetName: {
    fontSize: 28,
    color: '#333333',
    fontWeight: 'bold',
  },
  planetSubtitle: {
    fontSize: 16,
    color: '#999999',
    marginBottom: 10,
  },
  knowMoreButton: {
    marginTop: 10,
  },
  knowMoreText: {
    fontSize: 16,
    color: '#FF6F61',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#FF6F61',
  },
  inactiveDot: {
    backgroundColor: '#D8D8D8',
  },
});
