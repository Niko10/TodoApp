import React from "react";
import { StyleSheet, View, Text } from "react-native"
import { globalStyles } from "../style/global"

export default function Home( { navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>
                Home Screen
            </Text>
        </View>
    )
}