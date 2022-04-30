import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
function HomeScreen() {
    return(
        <View>
            <Text>Welcome from the Home Screen</Text>
            <MapView style={styles.map}/>
        </View>
    )
}

const styles  = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})

export { HomeScreen }