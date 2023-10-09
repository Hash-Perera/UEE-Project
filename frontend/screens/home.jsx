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
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const { width, height } = Dimensions.get("window");

export default function Home() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

  const navigation = useNavigation();

  const handleCardPress = (item) => {
    console.log("Card Pressed");
    console.log(item);
    navigation.navigate("GeneralEventDetails", { item: item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search for feedbacks"
              />
            </View>
            <TouchableOpacity style={styles.searchBtn}>
              <Image
                source={require("../assets/images/search.png")}
                style={styles.searchBtnImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
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
          data={[
            { key: "a" },
            { key: "b" },
            { key: "c" },
            { key: "d" },
            { key: "e" },
            { key: "f" },
            { key: "g" },
          ]}
          renderItem={({ item }) => (
            <UserEventCard item={item} handleCardPress={handleCardPress} />
          )}
          keyExtractor={(item) => item.key}
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
    flex: 1,
    backgroundColor: "#F3F4F8",
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
  map: {
    top: height * 0.035,
    width: width * 1,
    height: 300, // Set a fixed height for the map
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
