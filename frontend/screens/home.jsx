import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import UserEventCard from "../components/userEventCard";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function Home() {
  const navigation = useNavigation();

  const handleCardPress = (item) => {
    console.log("Card Pressed");
    console.log(item);
    navigation.navigate("GeneralEventDetails", { item: item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>Blank Boxes</Text>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: width * 0.06,
  },
  bottomContainer: {
    flex: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    marginHorizontal: width * 0.02,
    borderRadius: width * 0.04,
    marginBottom: height * 0.02,
  },
  title: {
    fontWeight: "bold",
    fontSize: width * 0.06,
    marginHorizontal: width * 0.02,
    marginBottom: height * 0.02,
  },
  flatListContent: {
    paddingHorizontal: width * 0.02,
  },
});
