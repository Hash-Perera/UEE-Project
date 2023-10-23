import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Modal,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import UserFeedbackCard from "../components/userFeedbackCard";

const GeneralEventDetails = ({ route }) => {
  const [price, setPrice] = useState(500);
  const [ticketQty, setTicketQty] = useState(0);
  const [total, setTotal] = useState(price * ticketQty);
  console.log(total);
  const [feedback, setFeedback] = useState("");
  const [feedbackData, setFeedbackData] = useState([
    {
      id: "1",
      userName: "John Doe",
      feedback: "This is a very good event. I really enjoyed it.",
      userImage: require("../assets/images/user.png"),
      rating: "1",
    },
    {
      id: "2",
      userName: "Doe",
      feedback: "This is a very good event. I really enjoyed it.",
      userImage: require("../assets/images/user.png"),
      rating: "2",
    },
    {
      id: "3",
      userName: "John Doe",
      feedback: "This is a very good event. I really enjoyed it.",
      userImage: require("../assets/images/user.png"),
      rating: "3",
    },
    {
      id: "4",
      userName: "John Doe",
      feedback: "This is a very good event. I really enjoyed it.",
      userImage: require("../assets/images/user.png"),
      rating: "4",
    },
  ]);

  const { item } = route.params;
  console.log(item);

  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate("GeneralNavigation");
  };

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["74%"];

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
  };

  useEffect(() => {
    const newTotal = price * ticketQty;
    setTotal(newTotal);
  }, [price, ticketQty]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <StatusBar style="dark" />
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
            <ScrollView>
              <Text>
                <Text style={{ fontWeight: "bold", color: "gray" }}>
                  Date:{" "}
                </Text>
                26th February 2022
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>
                  <Text style={{ fontWeight: "bold", color: "gray" }}>
                    Time:{" "}
                  </Text>
                  8.00 am
                </Text>
                <Text>
                  <Text style={{ fontWeight: "bold", color: "gray" }}>
                    Venue:{" "}
                  </Text>
                  SLIIT Malabe Campus
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>
                  <Text style={{ fontWeight: "bold", color: "gray" }}>
                    Organized by:{" "}
                  </Text>
                  FCSC
                </Text>
                <Text>
                  <Text style={{ fontWeight: "bold", color: "gray" }}>
                    Contact:{" "}
                  </Text>
                  0771234567
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <Text style={styles.feedbackTittleTxt}>Feedbacks :</Text>
              </View>
            </ScrollView>
            <FlatList
              data={feedbackData}
              renderItem={({ item }) => <UserFeedbackCard item={item} />}
              idExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
          <View style={styles.buyTicketSec}>
            <TouchableOpacity
              style={styles.buyTicketBtn}
              onPress={handlePresentModal}
            >
              <Text style={styles.buyTicketText}>Buy Tickets</Text>
            </TouchableOpacity>
          </View>

          {/* BottomSheet Content */}
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{
              borderRadius: width * 0.08,
            }}
          >
            <View style={styles.bottomSheetContainer}>
              <Text style={styles.bTittle}>Reserve Your Ticket</Text>
              <View style={styles.horizontalLine} />
              <View style={styles.eventSummary}>
                <View>
                  <Image
                    source={require("../assets/images/sampleEvent.jpeg")}
                    style={styles.bottomEventImg}
                  />
                </View>
                <View style={styles.bottomDetails}>
                  <Text style={styles.bEvent}>Wiramaya</Text>
                  <View>
                    <Text style={styles.subDetails}>Date : 26th Feb 2022</Text>
                    <Text style={styles.subDetails}>
                      Location : SLIIT Premises
                    </Text>
                    <Text style={styles.subDetails}>Duration : 4h</Text>
                  </View>
                </View>
              </View>
              <View style={styles.ticketDetails}>
                <Text style={styles.ticketTittle}>Ticket Details</Text>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <Text style={styles.bEvent}>General</Text>
                    <Text style={styles.bEvent}>
                      Available Tickets :{" "}
                      <Text style={{ color: "red", fontWeight: "bold" }}>
                        {" "}
                        10
                      </Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <Text style={styles.subDetails}>Price : Rs. {price}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Text style={styles.subDetails}>Quantity : </Text>
                      <TextInput
                        style={{
                          width: width * 0.1,
                          height: height * 0.04,
                          backgroundColor: "#D9D9D8",
                          borderRadius: width * 0.02,
                          paddingHorizontal: width * 0.02,
                          left: width * 0.06,
                          top: height * 0.01,
                        }}
                        keyboardType="numeric"
                        label="0"
                        onChangeText={(text) => setTicketQty(text)}
                      />
                    </View>
                  </View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      alignSelf: "flex-end",
                      top: height * 0.05,
                      right: width * 0.12,
                    }}
                  >
                    Total : {total}
                  </Text>
                </View>
              </View>
              <View style={styles.buyBtn}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#16213E",
                    padding: width * 0.03,
                    borderRadius: width * 0.1,
                    alignItems: "center",
                    width: "35%",
                    alignSelf: "center",
                    marginTop: height * 0.14,
                  }}
                >
                  <Text style={styles.buyTicketText}>Buy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
    top: height * 0.838,
    alignItems: "center",
    backgroundColor: "rgb(260,120,76)",
    borderTopLeftRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    bottom: 0,
  },
  ratingBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  feedbackTittleTxt: {
    fontSize: width * 0.035,
    fontWeight: "bold",
    marginTop: height * 0.02,
  },
  feeedbackImg: {
    width: width * 0.07,
    height: height * 0.04,
    marginTop: height * 0.02,
    left: width * 0.03,
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
  bottomSheetContainer: {
    flex: 1,
  },
  bTittle: {
    fontSize: width * 0.048,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: height * 0.002,
  },
  bEvent: {
    fontSize: width * 0.038,
    marginTop: height * 0.01,
    left: width * 0.03,
    fontWeight: "bold",
  },
  horizontalLine: {
    borderBottomColor: "#FF99CC",
    borderBottomWidth: 0.4,
    marginVertical: height * 0.01,
  },
  eventSummary: {
    backgroundColor: "#fff",
    width: "100%",
    top: height * 0.011,
    flexDirection: "row",
  },
  bottomEventImg: {
    width: width * 0.3,
    left: width * 0.18,
    height: height * 0.18,
    top: height * 0.015,
  },
  bottomDetails: {
    left: width * 0.2,
    top: height * 0.001,
    gap: height * 0.01,
  },
  subDetails: {
    color: "grey",
    fontSize: width * 0.03,
    left: width * 0.03,
    marginTop: height * 0.02,
  },
  ticketTittle: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: height * 0.04,
  },
});
