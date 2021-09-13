import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Configuration from '../screens/configuration';

const Stack = createStackNavigator();

export default function ConfigurationStack (){
    return (
        
            <Stack.Navigator initialRouteName="Configuration">
                <Stack.Screen name="Configuration" component={Configuration} options={{title: "Configuration", headerShown: false}}></Stack.Screen>
            </Stack.Navigator>
        
    );
};