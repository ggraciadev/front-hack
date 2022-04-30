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
                }}  
                />
                <Stack.Screen 
                name="kpi" 
                component={KPIScreen}
                options={{
                    title: "KPI",
                }}   
                />
            </Stack.Navigator>
    )
}

export { KPINavigator }