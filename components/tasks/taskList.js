import React from "react";
import { FlatList, StyleSheet } from "react-native";
import TaskItem from "./taskItem";
import { List } from "react-native-paper";
import { globalStyles } from "../../style/global";

export default function TaskList({ tasks, navigation }) {

  const onDelete = (task) => {
    navigation.navigate("TasksScreen", {
      deleteTask: task
    });
  };

  return (
    <List.Section style={styles.container}>
      <List.Subheader style={globalStyles.title}>Todo list</List.Subheader>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={tasks}
        renderItem={({ item }) => {
          return (
            <TaskItem data={item} handleDelete={() => onDelete(item)} />
          );
        }}
        keyExtractor={item => item.id}
      />
    </List.Section>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
