import React, { useState} from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, FlatList, Text } from "react-native";
import { globalStyles } from "../style/global";
import Todo from "./todo";

export default function TodoList() {
    const [items, setItems] = useState([
        { text: "Create Todo App", key: "1" },
        { text: "Feed my dog", key: "2" },
        { text: "Go to the gym", key: "3" },
        { text: "Go to jogging", key: "4" },
        { text: "Hang out with Coral", key: "5" },
        { text: "Prey God", key: "6" },
        { text: "Sleep in time", key: "7" },
      ]);
    
      const [inputItem, setInputItem] = useState("");
    
      const onChangeInputHandler = (text) => setInputItem(text);
    
      const onSubmitPressHandler = () =>
        setItems((oldItems) => [
          ...oldItems,
          { text: inputItem, key: Math.random().toString() },
        ]);
    
      const onTodoPress = (touchedItem) =>
        setItems(items.filter((item) => item.key !== touchedItem.key));
    

  return (
    <View style={styles.content}>
      <TextInput
        style={styles.inputItem}
        onChangeText={onChangeInputHandler}
        placeholder="Add new todo"
      />


      <TouchableOpacity style={styles.submitButton} onPress={onSubmitPressHandler}>
        <Text style={styles.submitButtonText}>Create</Text>
      </TouchableOpacity>
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Todo pressHandler={onTodoPress} item={item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    marginVertical: 20,
  },
  inputItem: {
    padding: 5,
    margin: 10,
    width: 200,
    borderBottomWidth: 0.5,
    borderColor: "grey",
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "coral",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    margin: 20,
  },
  submitButtonText: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 20,
    color: "#fff",
  }
});
