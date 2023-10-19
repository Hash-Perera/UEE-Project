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
import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import UserFeedbackCard from "../components/userFeedbackCard";

const GeneralEventDetails = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
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

  const submitFeedback = () => {
    setFeedback("");
    setModalVisible(false);
  };

  const openFeedbackModal = () => {
    setModalVisible(true);
    console.log("Feedback Modal Opened");
  };

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

          {/* Feedback Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Add Feedback</Text>
                <TextInput
                  style={styles.feedbackInput}
                  placeholder="Your feedback..."
                  multiline={true}
                  value={feedback}
                  onChangeText={(text) => setFeedback(text)}
                />
                {/* rating */}
                <View style={styles.ratingBar}>
                  <Text>Rating (5)</Text>
                  <TextInput
                    style={styles.ratingInput}
                    placeholder="0"
                    keyboardType="numeric"
                  />
                </View>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={submitFeedback}
                >
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{
              borderRadius: width * 0.08,
            }}
          >
            {/* BottomSheet Content */}
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
              <View style={styles.ticketDetails}></View>
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
    fontSize: width * 0.025,
    left: width * 0.03,
    marginTop: height * 0.02,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  feedbackInput: {
    height: 80,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  submitButton: {
    backgroundColor: "#16213E",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginBottom: 5,
  },
  submitButtonText: {
    color: "white",
  },
  closeButton: {
    backgroundColor: "rgb(260,120,76)",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
  },
});
