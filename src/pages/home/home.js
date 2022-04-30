import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CustomMapView } from './homeComponents/customMap';

function HomeScreen({navigation}) {
    return(
        <View style={styles.map}>
            <Text>Welcome from the Home Screen</Text>
            <CustomMapView 
                closeAndGoTo={() => navigation.navigate("kpi", {screen: "kpiSelector"})}
            />
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