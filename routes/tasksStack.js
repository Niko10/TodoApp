import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tasks from '../screens/tasks';
import EditTask from '../screens/tasks/edit';
import CreateTask from '../screens/tasks/create';

const Stack = createStackNavigator();

export default function TasksStack (){
    return (
        
            <Stack.Navigator initialRouteName="TasksScreen">
                <Stack.Screen name="TasksScreen" component={Tasks} options={{title: "Tasks list", headerShown: false}}></Stack.Screen>
                <Stack.Screen name="CreateScreen" component={CreateTask} options={{title: "Create task", headerShown: false}}></Stack.Screen>
                <Stack.Screen name="EditScreen" component={CreateTask} options={{title: "Create task", headerShown: false}}></Stack.Screen>
            </Stack.Navigator>
        
    );
};
    
