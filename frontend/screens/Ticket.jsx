import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import { COLORS } from "../constraints/constants";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function Ticket({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {item && (
        <View style={styles.container}>
          <Text style={styles.title}>Download Me</Text>
          <QRCode size={300} value={JSON.stringify(item)} />
          <TouchableOpacity
            style={styles.downBtn}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.downBtnTxt}>Download</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: height * 0.05,
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: "black",
    marginBottom: 100,
  },
  qrImage: {
    width: width * 0.8,
    height: width * 0.8,
    marginTop: height * 0.1,
  },

  downBtn: {
    top: height * 0.05,
    backgroundColor: COLORS.primary,
    borderRadius: width * 0.1,
    padding: width * 0.05,
  },
  downBtnTxt: {
    color: "#ffff",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
});
