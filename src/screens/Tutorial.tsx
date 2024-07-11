import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Tutorial() {
    return (
        <View style={styles.container}>
            <Text>
                This is the <Text style={{ fontWeight: 'bold' }}>Tutorial screen</Text>{' '}
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
})
