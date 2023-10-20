import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
const { width, height } = Dimensions.get("window");
import SponsorCard from "../components/sponsorCard";

const PublishAllSponsors = () => {
  const [list, setList] = useState([
    {
      id: 1,
      sponsorCategory: "Food and Beverage Sponsor",
      companyImage: require("../assets/images/sampleCompany.png"),
      budget: 100000,
    },
    {
      id: 2,
      sponsorCategory: "Main Sponsor",
      companyImage: require("../assets/images/sampleCompany.png"),
      budget: 160000,
    },
    {
      id: 3,
      sponsorCategory: "Main Sponsor",
      companyImage: require("../assets/images/sampleCompany.png"),
      budget: 1070000,
    },
  ]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.tittle}>Publish All Sponsors</Text>
        <FlatList
          data={list}
          renderItem={({ item }) => <SponsorCard item={item} />}
          idExtractor={(item) => item.id}
          horizontal={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tittle: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: height * 0.03,
    marginBottom: height * 0.05,
  },
  flatListContent: {
    gap: width * 0.02,
    margin: width * 0.04,
  },
});

export default PublishAllSponsors;
