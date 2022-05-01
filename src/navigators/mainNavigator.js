import {Image} from 'react-native';
import { HomeScreen } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { KPINavigator } from './kpiNavigator';

const Tab = createBottomTabNavigator();
function MainNavigator(){

    return(
        <Tab.Navigator>
            <Tab.Screen name="Main" component={HomeScreen} options={{
                headerTitle: (props) => (
                    <Image 
                        style={{ width: 200, height: 50}}
                        source={require('../../assets/images/logo_mm.png')}
                        resizeMode='contain'
                    />
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

export { MainNavigator }