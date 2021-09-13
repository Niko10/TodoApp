import 'react-native-gesture-handler';
import React, { useState } from "react";
// import { View } from "react-native";
// import Header from "./components/header";
// import TodoList from "./components/todoList";
import { globalStyles } from "./style/global";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import RootDrawer from './routes/drawer'

const getFonts = () => Font.loadAsync({
  'OpenSans-Regular': require("./assets/fonts/OpenSans-Regular.ttf"),
  'OpenSans-Bold': require("./assets/fonts/OpenSans-Bold.ttf"),
  'OpenSans-Light': require("./assets/fonts/OpenSans-Light.ttf"),
  'OpenSans-SemiBold': require("./assets/fonts/OpenSans-SemiBold.ttf"),
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);  
  
  if(fontsLoaded){
    return (
      <RootDrawer></RootDrawer>
      );
  }    
  else {
    return (
      <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={console.warn}
    />
    );
  }
}

