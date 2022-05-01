import {Button, Image, Pressable, StyleSheet, View} from 'react-native';
import { HomeScreen } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { KPINavigator } from './kpiNavigator';

const Tab = createBottomTabNavigator();
function MainNavigator({ navigation }){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Main" component={HomeScreen} options={{headerTitle: (props) => (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Pressable style={styles.topBarMenuButton} onPress={()=>{navigation.toggleDrawer()}}>
                            <Image
                                source={require('../../assets/desplegable.png')}
                            />    
                        </Pressable>   
                        <Image 
                            style={{ width: 200, height: 50}}
                            source={require('../../assets/images/logo_mm.png')}
                            resizeMode='contain'
                        />
                    </View>
                    
                ),
                tabBarIcon: () => (<Image source={require("../../assets/images/icons/map.png")} style={{width: 25, height: 25}} />),
              
                headerTitleStyle: { flex: 1, textAlign: 'center', },
            }} />
            <Tab.Screen name="KPIs" component={KPINavigator} options={{ 
                header: () => null,
                tabBarIcon: () => (<Image source={require("../../assets/images/icons/bar-chart.png")} style={{width: 25, height: 25}} />),
              
              }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    topBarMenuButton: {
        width: 80, 
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export { MainNavigator }