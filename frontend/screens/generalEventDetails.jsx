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
  console.log(item);

  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate("GeneralNavigation");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <Text style={styles.eventTitle}>Viramaya</Text>
          <Text style={styles.eventDesc} numberOfLines={3}>
            The SLIIT was established in 1999 to educate and train IT ...
            Wiramaya – විරාමය 2022 organized by Faculty of Computing Student
            Community (FCSC) of SLIIT will be held on 26th of February 2022 at
            SLIIT Malabe Campus.
          </Text>
        </View>
        <View style={styles.photos}>
          <TouchableOpacity>
            <Text style={styles.photosText}>Photos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.eventDetails}>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Date: </Text>
            26th February 2022
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Time: </Text>
            8.00 am
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Venue: </Text>
            SLIIT Malabe Campus
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Organized by: </Text>
            FCSC
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Contact: </Text>
            0771234567
          </Text>
        </View>
        <View style={styles.buyTicketSec}>
          <TouchableOpacity style={styles.buyTicketBtn}>
            <Text style={styles.buyTicketText}>Buy Tickets</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GeneralEventDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    top: height * 0.02,
    left: width * 0.02,
  },
  eventTitle: {
    position: "absolute",
    bottom: height * 0.167,
    fontSize: width * 0.12,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    left: width * 0.03,
  },
  eventDesc: {
    position: "absolute",
    bottom: height * 0.085,
    fontSize: width * 0.035,
    color: "grey",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    left: width * 0.04,
    width: "70%",
  },
  photos: {
    position: "absolute",
    width: "100%",
    top: height * 0.42,
    borderTopRightRadius: width * 0.1,
    borderTopLeftRadius: width * 0.1,
    backgroundColor: "#16213E",
  },
  photosText: {
    fontSize: width * 0.055,
    padding: width * 0.05,
    color: "#fff",
    top: height * 0,
    left: width * 0.01,
    paddingBottom: height * 0.06,
  },
  eventDetails: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    top: height * 0.5,
    borderTopLeftRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    padding: width * 0.05,
    gap: height * 0.038,
  },
  buyTicketSec: {
    position: "absolute",
    width: "100%",
    top: height * 0.84,
    alignItems: "center",
    backgroundColor: "rgb(260,120,76)",
    borderTopLeftRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    bottom: 0,
  },
  buyTicketBtn: {
    padding: width * 0.03,
    borderRadius: width * 0.1,
    alignItems: "center",
    width: "45%",
    alignSelf: "center",
    marginTop: height * 0.01,
  },
  buyTicketText: {
    color: "#fff",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
});
