import React from 'react';
import {Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper'
import { theme } from '../../style/theme';
import { globalStyles } from '../../style/global';


export function TextInputEx(props){
    return <TextInput theme={theme} {...props} />;
}

export function SubmitButtonEx(props){
    return (
    <TouchableOpacity style={globalStyles.submitButton} {...props}>
        <Text style={globalStyles.submitButtonText}>{props.text}</Text>
    </TouchableOpacity>);
}