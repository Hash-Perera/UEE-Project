import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const GeneralEventDetails = ({ route }) => {
  const { item } = route.params;

  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate("GeneralNavigation");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/sampleEvent.jpeg")}
              style={styles.eventImg}
              resizeMode="cover"
            />
            <View style={styles.darkLayer} />
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Image source={require("../assets/images/backIcon.png")} />
            </TouchableOpacity>
            <Text style={styles.eventTittle}>Viramaya</Text>
            <TouchableOpacity style={styles.buyTicketBtn}>
              <Text style={styles.buyTicketText}>Buy Tickets</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GeneralEventDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
  },
  eventImg: {
    width: "100%",
    height: height * 0.5,
  },
  darkLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
  },
  backButton: {
    position: "absolute",
    top: "5%",
    left: "0.2%",
  },
  eventTittle: {
    position: "absolute",
    bottom: "37%",
    fontSize: width * 0.12,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    alignSelf: "center",
  },
  buyTicketBtn: {
    position: "absolute",
    bottom: "8%",
    backgroundColor: "#fff",
    borderRadius: width * 0.01,
    padding: width * 0.01,
    right: "5%",
  },
  buyTicketText: {
    fontSize: width * 0.03,
    fontWeight: "bold",
  },
});
