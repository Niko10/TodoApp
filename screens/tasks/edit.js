import React from "react";
import {View, Text, TouchableOpacity} from "react-native"
import { globalStyles } from "../../style/global";


export default function EditTask(){
    return (
        <View>
            <Text>
                Edit task screen
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>
                Back
            </Text>
            </TouchableOpacity>
        </View>
    )
}