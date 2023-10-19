import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
import { LineChart } from "react-native-chart-kit";

const AnalyticsOrg = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.topContent}>
          <Text style={styles.tittle}>
            Income{"\n"}
            {"\t"}
            {"\t"}
            {"\t"} {"\t"}
            {"\t"}Report
          </Text>
          <View style={styles.imgIncome}>
            <Image
              source={require("../assets/images/income.png")}
              style={styles.incomeImg}
            />
          </View>
        </View>
        <View style={styles.bottomContent}>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width * 0.99} // from react-native
            height={230}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
        <View style={styles.funContainer}>
          <TouchableOpacity style={styles.fun}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: width * 0.06,
                  marginRight: width * 0.05,
                }}
              >
                16
              </Text>
              <Image
                source={require("../assets/images/one.png")}
                style={styles.funImg}
              />
            </View>
            <Text style={styles.funText}>Completed {"\t"}Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fun}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: width * 0.06,
                  marginRight: width * 0.05,
                }}
              >
                3
              </Text>
              <Image
                source={require("../assets/images/hourglass.png")}
                style={styles.funImg}
              />
            </View>
            <Text style={styles.funText}>OnGoing {"\t"}Events</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContent: {
    flex: 3,
    backgroundColor: "#fff",
    top: height * 0.02,
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: height * 0.02,
  },
  tittle: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    top: height * 0.06,
  },
  imgIncome: {
    height: height * 0.18,
    width: width * 0.3,
    marginLeft: width * 0.1,
  },
  incomeImg: {
    width: "100%",
    height: "100%",
  },
  bottomContent: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: width * 0.05,
  },
  funContainer: {
    flexDirection: "row",
    marginTop: height * 0.001,
    marginLeft: width * 0.05,
    padding: width * 0.05,
    borderRadius: width * 0.05,
    width: width * 0.9,
    alignItems: "center",
    marginBottom: height * 0.05,
    justifyContent: "space-between",
  },
  fun: {
    backgroundColor: "#ECF2FF",
    borderRadius: width * 0.05,
    padding: width * 0.06,
    width: width * 0.34,
    alignItems: "center",
    height: height * 0.17,
    alignSelf: "center",
  },
  funImg: {
    width: width * 0.07,
    height: width * 0.07,
  },
  funText: {
    fontSize: width * 0.04,
    color: "#000",
    fontWeight: "bold",
    marginTop: height * 0.01,
  },
});

export default AnalyticsOrg;
