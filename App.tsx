import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import Main from './src/screens/Main'

export default function App() {
    return (
        <View>
            <SafeAreaView>
                <Main />
            </SafeAreaView>
        </View>
    )
}
