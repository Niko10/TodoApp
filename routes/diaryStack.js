import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Diary from '../screens/diary';

const Stack = createStackNavigator();

export default function DiaryStack (){
    return (

            <Stack.Navigator initialRouteName="Diary">
                <Stack.Screen name="Diary" component={Diary}></Stack.Screen>
            </Stack.Navigator>

    );
};