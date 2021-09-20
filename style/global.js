import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#534D56",
    fontFamily: "OpenSans-SemiBold",
  },
  text: {
    color: "#333",
    fontFamily: "OpenSans-Regular",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  submitButton: {
    backgroundColor: '#1B998B',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5,
  },
  submitButtonText: {
    fontFamily: "OpenSans-Regular",
    color: '#F8F1FF'
  }
});
