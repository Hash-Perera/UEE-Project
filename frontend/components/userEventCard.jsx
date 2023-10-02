import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const UserEventCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity onPress={() => handleCardPress(item)}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/sampleEvent.jpeg')} resizeMode='contain' style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Event Name</Text>
          <Text>Event Date: 23/04/2024</Text>
          <Text>Event Location: Kurunagala</Text>
          <Text>Time: 19:00</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserEventCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: height * 0.02, // 2% of the screen height as margin
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: '#040D12',
  },
  imageContainer: {
    height: width * 0.4, // 40% of the screen width as height
    width: width * 0.4, // 40% of the screen width as width
    borderRadius: width * 0.05, // 5% of the screen width as borderRadius
    overflow: 'hidden',
    margin: width * 0.02, // 2% of the screen width as margin
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
    margin: width * 0.02, // 2% of the screen width as margin
    gap: height * 0.01, // 1% of the screen height as gap
  },
  title: {
    fontSize: width * 0.05, // 5% of the screen width as font size
    fontWeight: 'bold',
  },
});
