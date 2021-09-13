import React from "react";
import { StyleSheet, View, Text } from "react-native"
import { globalStyles } from "../style/global"

export default function Diary( { navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>
                Diary Screen
            </Text>
        </View>
    )
}