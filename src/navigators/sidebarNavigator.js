import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./mainNavigator";
import { SettingsScreen } from "../pages";
import { CustomDrawer } from "./customDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
const Drawer = createDrawerNavigator();

const FakeComponent = ()=>{
  return(<></>)
}

function SidebarNavigator() {

  return(
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => {<CustomDrawer {...props} />}}>
          <Drawer.Screen
            name="Home"
            component={MainNavigator}
            options={{
              title: 'Map',
              headerShown: false, 
              drawerIcon: ({ color }) => (
                <Ionicons name="home-outline" size={22} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={MainNavigator}
            options={{
              title: 'Settings',
              drawerIcon: ({ color }) => (
                <Ionicons name="settings-outline" size={22} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
  )
}



export { SidebarNavigator };
