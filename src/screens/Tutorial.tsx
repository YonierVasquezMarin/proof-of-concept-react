import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyle } from '../styles/global'

export default function Tutorial() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text>Text into container</Text>
            </View>
            <Text>
                This is the{' '}
                <Text style={{ fontWeight: 'bold' }}>Tutorial screen</Text>{' '}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
        alignItems: 'center',
    },
    textContainer: {
        backgroundColor: 'yellow',
        ...globalStyle.containerBorder,
    },
})
