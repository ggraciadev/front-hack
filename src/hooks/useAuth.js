
import React, { useContext } from 'react';
import axios from 'axios';
import {API_HOST} from '@env';
import { AuthContext } from '../context/authContext';
const useAuth = () => {

    const { setAuth, logout } = useContext(AuthContext);

    const signIn = async (user) => {
        const { email, password } = user;
        const response = await axios.post(`${API_HOST}/api/auth/login`, {
            email,
            password,
        })
        const data = response.data;
        setAuth(data);   
    }

    const signUp = async (user) => {
        const { name, email, password } = user;
        await axios.post(`${API_HOST}/api/auth/register`, {
            name, 
            email,
            password
        })
    }

    const signOut = async () => {
        logout();
    }

    return { signIn, signOut, signUp };
}

export default useAuth;