import React, { useContext, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { KPINavigator , SidebarNavigator} from "./navigators";
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './context/authContext';
import { Image } from 'react-native';
import { SignInScreen, SignUpScreen, HomeScreen, KPISelectorScreen } from './pages';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack =  createStackNavigator();

function Main() {
    const { auth } = useContext(AuthContext);

    const [isAuthenticated, setAuthenticated] = useState(false); 

    return(
        !isAuthenticated ?(
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="SignIn"
                >
                    <Stack.Screen 
                    name="SignIn" 
                    options={{
                        title: 'Sign In',
                        headerStyle: {
                            backgroundColor: '#c82420',
                        },
                        gestureEnabled: false,
                    }}  
                    >
                        {() => <SignInScreen onSignIn={() => setAuthenticated(true)} />}
                    </Stack.Screen>
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
            <SidebarNavigator />
        )
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export { Main }
