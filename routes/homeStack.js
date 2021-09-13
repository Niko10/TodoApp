import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';

const Stack = createStackNavigator();

export default function HomeStack (){
    return (
        
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={Home} options={{headerShown: false}}></Stack.Screen>
            </Stack.Navigator>
        
    );
};