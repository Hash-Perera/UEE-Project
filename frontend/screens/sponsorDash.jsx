import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
const { width, height } = Dimensions.get("window");
import SponsorCard from "../components/sponsorCard";
import { useNavigation } from "@react-navigation/native";

const SponsorDash = () => {
  const navigation = useNavigation();
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
  const handlePublish = () => {
    navigation.navigate("PublishSponsorship");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.addImgContainer}
          onPress={handlePublish}
        >
          <Image
            source={require("../assets/images/add.png")}
            style={styles.addImg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.tittle}>Your List</Text>
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

export default SponsorDash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    flex: 1,
    bottom: height * 0.05,
    top: height * 0.05,
  },
  addImgContainer: {
    width: width * 0.5,
    height: height * 0.5,
    left: width * 0.1,
  },
  addImg: {
    width: width * 0.25,
    height: height * 0.15,
  },
  bottomContainer: {
    flex: 3,
    padding: width * 0.05,
  },
  tittle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: height * 0.02,
  },
  flatListContent: {
    gap: height * 0.02,
  },
});
