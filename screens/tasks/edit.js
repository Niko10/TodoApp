import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native"
import { globalStyles } from "../../style/global";
import {
  TextInputEx,
  SubmitButtonEx,
} from "../../components/shared/customizedComponenets";
import { IconButton } from "react-native-paper";

export default function EditTask({navigation, route}){

    console.log(route.params);
    const {title, datetime, id, status} = route.params.task;
    console.log("edit task with: " + title + " " + datetime + " " + status, " " + id);

    const [newTitle, setTitle] = useState(title);
  const [newDatetime, setDatetime] = useState(datetime);
  const [newStatus, setStatus] = useState(status);

  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };
  const changeDatetime = (newDatetime) => {
    setDatetime(newDatetime);
  };
  const changeStatus = (newStatus) => {
    setStatus(newStatus);
  };

  const onEdit = (title, datetime, status, id) => {
    console.log("edit task with: " + title + " " + datetime + " " + status, " " + id);
    navigation.navigate("TasksScreen", {
      editTask: {
        title: title,
        datetime: datetime,
        status: status,
        id: id
    }
    });
  };
  
    
    return (
        <View style={styles.container}>
          <View style={styles.header}>
          <Text style={globalStyles.title}>Edit task screen</Text>
        <IconButton
          icon="close"
          color={"#656176"}
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
        
  
        <TextInputEx
        mode="outlined"
        label="Enter task title"
        placeholder="Type here something"
         style={styles.input} onChangeText={changeTitle} value={newTitle} />
        <TextInputEx
        mode="outlined"
        label="Enter task datetime"
        placeholder="Type here something"
        style={styles.input}
          onChangeText={changeDatetime}
          value={newDatetime}
        />
        <TextInputEx
        mode="outlined"
        label="Enter task status"
        placeholder="Type here something"
        style={styles.input}
          onChangeText={changeStatus}
          value={newStatus}
        />
        <SubmitButtonEx onPress={() => onEdit(newTitle, newDatetime, newStatus, id)} text={"Edit task"} />
  
        
      </View>
    )
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
    
})