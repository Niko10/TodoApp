import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { globalStyles } from "../../style/global";
import {
  TextInputEx,
  SubmitButtonEx,
} from "../../components/shared/customizedComponenets";

export default function CreateTask({ navigation, route }) {
  const [title, setTitle] = useState("");
  const [datetime, setDatetime] = useState("");
  const [status, setStatus] = useState("pending");

  const changeTitle = (title) => {
    setTitle(title);
  };
  const changeDatetime = (datetime) => {
    setDatetime(datetime);
  };
  const changeStatus = (status) => {
    setStatus(status);
  };

  const onCreate = (title, datetime, status) => {
    console.log("create task with: " + title + " " + datetime + " " + status);
    navigation.navigate("TasksScreen", {
      newTask: {
        title: title,
        datetime: datetime,
        status: status,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={globalStyles.title}>Create task screen</Text>
        <IconButton
          icon="close"
          color={"#656176"}
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>

      <TextInputEx
        style={styles.input}
        mode="outlined"
        label="Enter task title"
        placeholder="Type here something"
        onChangeText={changeTitle}
        value={title}
      />
      <TextInputEx
        style={styles.input}
        mode="outlined"
        label="Enter task datetime"
        placeholder="Type here something"
        placeholder="Datetime"
        onChangeText={changeDatetime}
        value={datetime}
      />
      <TextInputEx
        style={styles.input}
        mode="outlined"
        label="Enter task status"
        placeholder="Type here something"
        placeholder={status}
        onChangeText={changeStatus}
        value={status}
      />

      <SubmitButtonEx
        onPress={() => onCreate(title, datetime, status)}
        text={"Create new task"}
      ></SubmitButtonEx>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  header : {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    margin: 15,
    height: 40,
  },
  backButton: {
    backgroundColor: "#7a42fa",
    padding: 10,
    margin: 15,
    height: 40,
  },
  backButtonText: {
    color: "white",
  },
});
