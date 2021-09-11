import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../style/global";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={globalStyles.title}>ToDo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    paddingTop: 50,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
