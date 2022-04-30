import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CustomMapView } from './homeComponents/customMap';
function HomeScreen() {
    return(
        <View style={styles.map}>
            <Text>Welcome from the Home Screen</Text>
            <CustomMapView/>
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