import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Todo({pressHandler, item}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item)}>
      <View style={styles.item}>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    item: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: "dashed",
        padding: 20,
        margin: 5,
      },
})