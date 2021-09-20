
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack';
import DiaryStack from './diaryStack';
import TasksStack from './tasksStack';
import ConfigurationStack from './configurationStack';



const Drawer = createDrawerNavigator();

export default function RootDrawer(){
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" >
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="Tasks" component={TasksStack} />
                <Drawer.Screen name="Diary" component={DiaryStack} />
                <Drawer.Screen name="Configuration" component={ConfigurationStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
