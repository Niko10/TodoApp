import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useNavigation } from "@react-navigation/native";
import { List, Colors } from "react-native-paper";

export default function TaskItem({ data, handleDelete }) {
  const navigation = useNavigation();

  const rightSwipe = () => {
    return (
      <TouchableOpacity onPress={handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Animated.Text>Delete</Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.itemContainer}>
      <Swipeable renderRightActions={rightSwipe}>
        <List.Item
          titleStyle={styles.itemTitle}
          descriptionStyle={styles.itemDescription}
          title={data.title}
          description={data.datetime}
          onPress={() => navigation.navigate("EditScreen", { task: data })}
          left={(props) => (
            <List.Icon
              {...props}
              style={styles.itemIcon}
              color={Colors.white}
              icon={
                data.status == "pending"
                  ? "clock-outline"
                  : "checkbox-marked-circle-outline"
              }
            />
          )}
        />
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 80,
    backgroundColor: "#1B998B",
    justifyContent: "center",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  itemTitle: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "OpenSans-SemiBold",
  },
  itemDescription: {
    color: "white",
    fontFamily: "OpenSans-Regular",
  },
  itemIcon: {
    color: "white",
    margin: 0,
    padding: 0,
  },
  deleteBox: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 80,
  },
});
