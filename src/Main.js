import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { KPINavigator , SidebarNavigator} from "./navigators";
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './context/authContext';
import { SignInScreen, SignUpScreen, HomeScreen, KPISelectorScreen } from './pages';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack =  createStackNavigator();

function Main() {
    const { auth } = useContext(AuthContext);

    return(
        auth?.isSignedIn ?(
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="SignIn"
                >
                    <Stack.Screen 
                    name="SignIn" 
                    component={SignInScreen}
                    options={{
                        title: 'Sign In',
                        headerStyle: {
                            backgroundColor: '#c82420',
                        },
                        gestureEnabled: false,
                    }}  
                    />
                    <Stack.Screen 
                    name="SignUp" 
                    component={SignUpScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#c82420',
                        },
                        title: 'Sign Up',
                    }}   
                    />
                </Stack.Navigator>
            </NavigationContainer>
        ) : ( 
            <NavigationContainer>
                <SidebarNavigator/>
            </NavigationContainer>
        )
    )
}

export { Main }
