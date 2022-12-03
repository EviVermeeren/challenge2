import React from 'react';
import { View } from 'react-native';

export default function Line() {
    return (
        <View style={{
            borderBottomColor: '#AE5E25',
            borderStyle: "dotted",
            borderBottomWidth: 1,
            width: "90%",
            marginTop: 15,
            marginLeft: 20,
            marginBottom: 5,
        }} />
    )
}