import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import UserEventCard from "../components/userEventCard";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const { width, height } = Dimensions.get("window");

export default function Home() {
  const navigation = useNavigation();

  //setters
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [eventData, setEventData] = useState([
    {
      id: "1",
      eventName: "Wiramaya",
      eventImage: require("../assets/images/sampleEvent.jpeg"),
      eventDate: "23/04/2024",
      eventlocation: "Kandy",
      eventTime: "7:00 AM",
      gainStars: 2,
      eventDescription:
        "The SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka.",
      eventContact: "0712345678",
      eventOrganizer: "SLIIT",
    },
    {
      id: "2",
      eventName: "MoraExplorers",
      eventImage: require("../assets/images/sampleEvent.jpeg"),
      eventDate: "22/10/2024",
      eventlocation: "Moratuwa",
      eventTime: "10:00 AM",
      gainStars: 4,
      eventDescription:
        "The SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka.",
      eventContact: "0712345678",
      eventOrganizer: "SLIIT",
    },
    {
      id: "3",
      eventName: "CodeFest",
      eventImage: require("../assets/images/sampleEvent.jpeg"),
      eventDate: "02/07/2024",
      eventlocation: "malabe",
      eventTime: "9:00 AM",
      gainStars: 5,
      eventDescription:
        "The SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka.",
      eventContact: "0712345678",
      eventOrganizer: "SLIIT",
    },
    {
      id: "4",
      eventName: "sahana",
      eventDate: "03/04/2024",
      eventImage: require("../assets/images/sampleEvent.jpeg"),
      eventlocation: "Kandy",
      eventTime: "5:00 AM",
      gainStars: 4,
      eventDescription:
        "The SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka.",
      eventContact: "0712345678",
      eventOrganizer: "SLIIT",
    },
    {
      id: "5",
      eventName: "Tharunyata Hetak",
      eventImage: require("../assets/images/sampleEvent.jpeg"),
      eventDate: "27/04/2024",
      eventlocation: "colombo",
      eventTime: "5:00 AM",
      gainStars: 4,
      eventDescription:
        "The SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka. SLIIT was established in 1999 to educate and train IT professionals required by the fast growing IT industry in Sri Lanka.",
      eventContact: "0712345678",
      eventOrganizer: "SLIIT",
    },
  ]);

  // Get user's current location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  //card press
  const handleCardPress = (item) => {
    console.log("Card Pressed");
    console.log(item);
    navigation.navigate("GeneralEventDetails", { item: item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          {errorMsg ? (
            <Text>{errorMsg}</Text>
          ) : location ? (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title="My Location"
                description="This is where I am"
              />
            </MapView>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Upcoming Events</Text>

        <FlatList
          data={eventData}
          renderItem={({ item }) => (
            <UserEventCard item={item} handleCardPress={handleCardPress} />
          )}
          idExtractor={(item) => item.id}
          horizontal={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topContainer: {
    flex: 1,
  },

  map: {
    top: height * 0.035,
    width: width * 1,
    height: 300,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: width * 0.06,
  },
  bottomContainer: {
    flex: 6,
    shadowColor: "#000",
    marginHorizontal: width * 0.02,
    borderRadius: height * 0.04,
    marginBottom: height * 0.02,
  },
  title: {
    fontWeight: "bold",
    fontSize: width * 0.06,
    marginHorizontal: width * 0.02,
    marginBottom: height * 0.02,
  },
  flatListContent: {
    paddingHorizontal: width * 0.01,
  },
});
