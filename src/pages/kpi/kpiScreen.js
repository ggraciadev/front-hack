import { View, Text, Button } from 'react-native'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import useAuth from '../../hooks/useAuth';

function KPIScreen() {

    const { signOut } = useAuth();
    
    return(
        <View>
            <Text>Welcome to the KPI's screen</Text>
        </View>
    )
}

export { KPIScreen }