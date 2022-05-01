import axios from "axios";
import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const initialState = {
        token: null,
        isSignedIn: false
    }

    const loggedState = {
        token: null,
        isSignedIn: true
    }

    const [auth, setAuthState] = useState(initialState);

    const getAuthState = async () => {
        try {
            const authDataString = await AsyncStorage.getItem("auth");
            const authData = JSON.parse(authDataString);

            configureAxiosHeaders(authData.token);
            setAuthState({
                token: authData.token,
                isSignedIn: true
            });
        } catch (error) {
           setAuthState(initialState); 
        }
    }

    const setAuth = async (auth) => {
        auth.isSignedIn = true;
        
    }

    const login = () => {
        setAuthState(loggedState);
    }

    const logout = () => {
        setAuthState(initialState); 
    }

    const configureAxiosHeaders = (token) => {
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
    }

    useEffect(() => {
        getAuthState();
    },[])

    return (
        <AuthContext.Provider value={{ auth, setAuth, logout, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }