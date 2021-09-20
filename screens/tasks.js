import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import TaskList from "../components/tasks/taskList";
import { globalStyles } from "../style/global";
import { FAB } from "react-native-paper";

export default function Tasks({ navigation, route }) {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Go to the gym",
      datetime: "24/12/2019 09:15:00",
      status: "pending",
      labels: ["1", "2", "3"],
    },
    {
      id: "2",
      title: "Go to the gym",
      datetime: "25/12/2019 09:15:00",
      status: "pending",
      labels: ["1", "2", "3"],
    },
    {
      id: "3",
      title: "Go to the gym",
      datetime: "26/12/2019 09:15:00",
      status: "pending",
      labels: ["3"],
    },
    {
      id: "4",
      title: "Go to the gym",
      datetime: "27/12/2019 09:15:00",
      status: "pending",
      labels: [],
    },
    {
      id: "5",
      title: "Go to the gym",
      datetime: "27/12/2019 10:15:00",
      status: "pending",
      labels: [],
    },
    {
      id: "6",
      title: "Go to the gym",
      datetime: "",
      status: "pending",
      labels: ["1", "2", "4"],
    },
    {
      id: "7",
      title: "Go to the gym",
      datetime: "",
      status: "done",
      labels: ["1", "2", "5"],
    },
    {
      id: "8",
      title: "Go to the gym",
      datetime: "",
      status: "pending",
      labels: ["1", "2", "6"],
    },
    {
      id: "9",
      title: "Go to the gym",
      datetime: "",
      status: "pending",
      labels: ["1", "2", "6"],
    },
    {
      id: "10",
      title: "Go to the gym",
      datetime: "",
      status: "pending",
      labels: ["1", "2", "6"],
    },
  ]);

  useEffect(() => {
    if (route.params?.newTask) {
      console.log(route.params.newTask);
      setTasks((prevTasks) => {
        return [
          ...prevTasks,
          {
            id: Math.random().toString(),
            title: route.params.newTask.title,
            datetime: route.params.newTask.datetime,
            status: route.params.newTask.status,
            labels: ["1", "2", "3"],
          },
        ];
      });
    }
  }, [route.params?.newTask]);

  useEffect(() => {
    if (route.params?.editTask) {
      setTasks((prevTasks) => {
        let taskIndex = prevTasks.findIndex(
          (task) => task.id == route.params.editTask.id
        );
        prevTasks[taskIndex].title = route.params.editTask.title;
        prevTasks[taskIndex].datetime = route.params.editTask.datetime;
        prevTasks[taskIndex].status = route.params.editTask.status;
        return [...prevTasks];
      });
    }
  }, [route.params?.editTask]);

  useEffect(() => {
    if (route.params?.deleteTask) {
      console.log("before delete: " + tasks);
      console.log("delete: " + route.params.deleteTask.id);
      setTasks((prevTasks) => {
        return prevTasks.filter(
          (task) => task.id != route.params.deleteTask.id
        );
      });
      console.log("after delete: " + tasks);
    }
  }, [route.params?.deleteTask]);

  return (
    <View style={globalStyles.container}>
      <TaskList tasks={tasks} navigation={navigation} />
      <View>
      <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => navigation.navigate("CreateScreen")
  }
  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#1B998B',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,

  }
})
