import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CustomMapView } from './homeComponents/customMap';

function HomeScreen({navigation}) {
    return(
        <View style={styles.map}>
            <CustomMapView 
                closeAndGoTo={() => navigation.navigate("KPISelector", {screen: "kpiSelector"})}
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