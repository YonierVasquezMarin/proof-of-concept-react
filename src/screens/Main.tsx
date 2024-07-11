import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Main() {
    return (
        <View style={styles.container}>
            <Text>
                Welcome to <Text style={styles.strong}>Main screen</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        alignItems: 'center'
    },
    strong: {
        fontWeight: 'bold',
    },
})
