import {Image} from 'react-native';
import { HomeScreen } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { KPINavigator } from './kpiNavigator';

const Tab = createBottomTabNavigator();
function MainNavigator(){

    return(
        <Tab.Navigator>
            <Tab.Screen name="Main" component={HomeScreen} options={{headerTitle: (props) => (
                    <Image 
                        style={{ width: 200, height: 50}}
                        source={require('../../assets/images/logo_mm.png')}
                        resizeMode='contain'
                    />
                ),
                headerTitleStyle: { flex: 1, textAlign: 'center', },
            }} />
            <Tab.Screen name="KPIs" component={KPINavigator} options={{ header: () => null }}/>
        </Tab.Navigator>
    )
}

export { MainNavigator }