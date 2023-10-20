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
const { width, height } = Dimensions.get("window");

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
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
  const [filteredData, setFilteredData] = useState(eventData);

  const handleSearch = () => {
    const filtered = eventData.filter((item) =>
      item.eventName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const navigation = useNavigation();

  const handleCardPress = (item) => {
    console.log("Card Pressed");
    console.log(item);
    navigation.navigate("AllEventDetails", { item: item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
                placeholder="Search for Events"
              />
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
              <Image
                source={require("../assets/images/search.png")}
                style={styles.searchBtnImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <FlatList
          data={filteredData}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topContainer: {
    flex: 1,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: height * 0.02,
    height: height * 0.08,
  },
  searchWrapper: {
    flex: 2,
    backgroundColor: "#D9D9D9",
    marginRight: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: height * 0.04,
    height: "80%",
  },
  searchInput: {
    width: "100%",
    height: "80%",
    paddingHorizontal: width * 0.04,
    marginLeft: width * 0.02,
    borderRadius: height * 0.04,
  },
  searchBtn: {
    width: width * 0.11,
    height: "70%",
    backgroundColor: "#9CC5FF",
    borderRadius: height * 0.013,
    justifyContent: "center",
    alignItems: "center",
    marginRight: width * 0.02,
  },
  searchBtnImage: {
    width: "35%",
    height: "50%",
    tintColor: "white",
  },
  bottomContainer: {
    flex: 18,
    marginHorizontal: width * 0.02,
    borderRadius: height * 0.04,
    marginBottom: height * 0.02,
  },
  flatListContent: {
    paddingHorizontal: width * 0.01,
  },
});
