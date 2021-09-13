import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { globalStyles } from "../style/global"

export default function Tasks( { navigation }) {
    return (
        <View style={globalStyles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("CreateScreen")}>
                <View>
                    <Text style={globalStyles.text}>
                        Create task
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("EditScreen")}>
                <View>
                    <Text style={globalStyles.text}>
                        Edit task
                    </Text>
                </View>
            </TouchableOpacity>
            <Text style={globalStyles.title}>
                Tasks Screen
            </Text>
        </View>
    )
}