import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { signOut } from "firebase/auth";

import { Colors, auth } from "../config";

export const PatientSearchScreen = ({ navigation }) => {
  const handleLogout = () => {
    return navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Patient ID:
        <Text>{"    "}</Text>
        <Text style={styles.headerNormalText}>S1234567Z</Text>
      </Text>

      <Text style={styles.bodyTitleText}>
        Patient Name:
        <Text>{"    "}</Text>
        <Text style={styles.bodyText}>Zach Koh</Text>
      </Text>

      <Text style={styles.bodyTitleText}>
        Note:
        <Text>{"    "}</Text>
        <Text style={styles.bodyText}>Infected with HIV</Text>
      </Text>

      <Text>{"\n"}</Text>

      <Text style={styles.underlineDate}>3 Nov - 5 Nov</Text>
      <Text style={styles.timelineText}>
        3 Nov
        <Text>{"        "}</Text>
        Scope A1:
        <Text>{"    "}</Text>
        <Text>Sampling</Text>
      </Text>

      <Text style={styles.timelineDivider}>|</Text>

      <Text style={styles.timelineText}>
        5 Nov
        <Text>{"        "}</Text>
        Scope E2:
        <Text>{"    "}</Text>
        <Text>Washing</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerText: {
    marginTop: 40,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 30,
    //textAlign: "center"
  },
  headerNormalText: {
    fontSize: 25,
    fontWeight: "normal",
    //textAlign: "center"
  },
  bodyTitleText: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 30,
    //textAlign: "center"
  },
  bodyText: {
    fontSize: 25,
    fontWeight: "normal",
    //textAlign: "center"
  },
  underlineDate: {
    marginTop: 20,
    fontSize: 20,
    marginLeft: 30,
    textDecorationLine: "underline",
  },
  timelineText: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 30,
  },
  timelineDivider: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 55,
  },
});
