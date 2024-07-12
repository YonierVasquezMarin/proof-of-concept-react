import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { ScreenList } from './ScreenStack'

type MainScreenNavigationProp = StackNavigationProp<ScreenList, 'Main'>

export default function Main() {
    const navigation = useNavigation<MainScreenNavigationProp>()

    const goToTutorialScreen = () => {
        navigation.navigate('Tutorial')
    }

    return (
        <View style={styles.container}>
            <Text>
                Welcome to <Text style={styles.strong}>Main screen</Text>
            </Text>
            <Button title="Go to tutorial" onPress={goToTutorialScreen} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        alignItems: 'center',
    },
    strong: {
        fontWeight: 'bold',
    },
})
