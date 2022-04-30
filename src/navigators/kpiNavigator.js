import React  from 'react';
import { KPIScreen, KPISelectorScreen} from '../pages';
import { createStackNavigator } from '@react-navigation/stack';

const Stack =  createStackNavigator();

function KPINavigator(){
    return(
            <Stack.Navigator
                initialRouteName="kpiSelector"
                >
                <Stack.Screen 
                name="kpiSelector" 
                component={KPISelectorScreen}
                options={{
                    title: "KPISelector",
                    gestureEnabled: false,
                    header: () => null,
                }}  
                />
                <Stack.Screen 
                name="kpi" 
                component={KPIScreen}
                options={{
                    title: "Data charts",
                    headerTitleStyle: {
                        marginTop: 25,
                    },
                    headerLeftContainerStyle: {
                        marginTop: 25,
                    },
                    headerStyle: {
                        height: 69,                       
                    },
                }}   
                />
            </Stack.Navigator>
    )
}

export { KPINavigator }