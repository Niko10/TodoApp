import React from "react";
import {View, Text} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../../style/global";


export default function CreateTask({navigation}){
    return (
        <View>
            <Text>
                Create task screen
            </Text>

            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>
                Back
            </Text>
            </TouchableOpacity>
        </View>
        
    )
}