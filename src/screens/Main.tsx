import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Main() {
    return (
        <View style={styles.container}>
            <Text>
                Welcome to <Text style={styles.strong}>Main page</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    strong: {
        fontWeight: 'bold',
    },
})
