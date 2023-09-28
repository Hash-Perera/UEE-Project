import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React from "react";
import UserEventCard from "../components/userEventCard";

export default function Home() {

  const handleCardPress = (item) => {
    console.log('Card Pressed');
   
  }
  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={{ fontWeight: 'bold' }}>Blank Boxes</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>
          Upcoming Events
        </Text>
        
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
          renderItem={({ item }) => (
            <UserEventCard
              item={item}
              handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={item => item.key} 
          horizontal={false}
        />
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    marginRight: 13,
    borderRadius: 10,
    marginLeft: 10,
  },
  title: { 
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 20,
    marginBottom: 20,
  }
});
