import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const Eventcard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <Image
        source={require('../assets/images/sampleEvent.jpeg')}
        style={styles.image}
      />
      <Text style={styles.eventName} numberOfLines={1}>
        {item.eventname}
      </Text>
      <View style={styles.details}>
        <View style={styles.eventcontainer}>
          <Text style={styles.detailText}>{item.venue}</Text>
          <Text style={styles.detailText}>{item.eventtype}</Text>
        </View>
        <Text style={styles.detailText}>{item.date}</Text>

        <View style={styles.ticketcontainer}>
          <View style={styles.soldticket}>
            <Text style={styles.tickettext} numberOfLines={1}>{item.soldTickets} sold</Text>
          </View>
          <View style={styles.alltickets}>
            <Text style={styles.tickettext} numberOfLines={1}>{item.alltickets} available</Text>
          </View>
        </View>

        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: "DMBold"
  },
  details: {
    marginTop: 8,

  },
  detailText: {
    fontSize: 14,
    color: '#555',
    fontFamily: "DMRegular"
  },
  eventcontainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  ticketcontainer: {

    flexDirection: "row",
    gap: width * 0.06,
    alignContent: "center",
    alignItems: "center",
    marginLeft: width * 0.15,
    marginTop: 15,
    marginBottom: 10

  },
  tickettext: {
    fontSize: 16,
    color:"#ffffff",
    shadowColor:'#000',
    fontFamily: "DMMedium",
    textShadowColor: "black",
    marginLeft: width * 0.02,
    marginRight:width*0.005,
    marginTop:height*0.01,
    
   
  },
  soldticket: {
    backgroundColor: '#406882',
    width: width * 0.22,
    height:width*0.08,
    borderRadius: width * 0.5,
   
    
  },

  alltickets: {

    backgroundColor: '#16213E',
    width: width * 0.32,
    height:height*0.04,
    borderRadius: width * 0.2,


  }
});

export default Eventcard;
