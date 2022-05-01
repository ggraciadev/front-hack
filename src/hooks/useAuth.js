
import React, { useContext } from 'react';
import axios from 'axios';
import {API_HOST} from '@env';
import { AuthContext } from '../context/authContext';
const useAuth = () => {

    const { setAuth, logout, login } = useContext(AuthContext);

    const signIn = async (user) => {
        login();
    }

    const signUp = async (user) => {
        login();
    }

    const signOut = async () => {
        logout();
    }

    return { signIn, signOut, signUp };
}

export default useAuth;