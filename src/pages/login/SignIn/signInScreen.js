import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState, useContext } from 'react';
import useAuth from '../../../hooks/useAuth';
import { AuthContext } from '../../../context/authContext';
import CustomButton from "../../../utils/customButton";


function SignInScreen({ navigation }) {

    
    const { signIn } = useAuth();

    const [showPassword, setShowPassword] = useState(true);
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState({
        error: false, 
        message: ''
    });
    const [isLoading, setLoading] = useState(false);

    const { email, password } = user;

    const onChangeText = (text, name) => {
        setUser({
            ...user,
            [name]: text 
        })
    }

    const SignIn = () => {
        if(email.length === 0 || password.length === 0) {
            //Form Error
            setError({
                error: true,
                message: 'Please fill in all fields'
            });
        }else {
            setLoading(true);
            signIn(user)
                .then()
                .catch(err => {setError({error:true, message: 'There is an error with your password or email'});})
                .finally(()=> setLoading(false));
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/images/logo_mm.png')}
                    style={[styles.logo]}
                />
            </View>
            <View style={[styles.topContainer]}>
                <View>
                    <Text style={styles.title}>
                        Sign In
                    </Text>
                    <Text style={styles.subtitle}>
                        Enter your credentials below
                    </Text>
                </View>
                {error.error ?
                    <View style={styles.errorContainer}>
                        <Text style={styles.error}>
                            {error.message}
                        </Text>
                    </View>
                : null}
                <TextInput
                    onChangeText={(text) => onChangeText(text, 'email')}
                    value={email}
                    style={styles.input}
                    name="email"
                    placeholder="Email:"
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        onChangeText={(text) => onChangeText(text, 'password')}
                        value={password}
                        style={[styles.input, {marginBottom: 0, width: '90%'}]}
                        name="password"
                        placeholder="Password:"
                        textContentType="password"
                        secureTextEntry={showPassword}
                    />
                    <View style={[]}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Image
                                source={require('../../../../assets/images/showPwd.png')}
                                style={styles.showPwd}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
                <CustomButton
                    customStyles={styles.button}
                    onPress={()=> SignIn()}
                    text={isLoading ? 'Loading...' : 'Sign In'}
                    disabled={isLoading}
                />
            </View>
            <Text style={{marginTop: 0, fontSize: 16}}>
                or through one of your corporative accounts below
            </Text>
            <View style={{flexDirection:'row', justifyContent: 'space-around', width: '100%'}}>
                <CustomButton
                    text='Outlook'
                    customStyles={styles.button}
                />
                <CustomButton
                    text='Google'
                    customStyles={styles.button2}
                />
            </View>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <Text style={{fontSize:20}}>
                    Don't have an account?
                </Text>
                <View style={{marginLeft: 5}}>
                    <Text style={{color: '#c82420', fontSize: 20}} onPress={() => {navigation.navigate("SignUp")}}>
                        Sign Up
                    </Text>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    topContainer: {
    },
    showPwd: {
        width: 40,
        height: 40,
    },
    logoContainer: {
        marginTop: 25, 
        height: 65,
        width: '100%',
    },
    logo: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    subtitle: {
        marginBottom: 10,
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#c82420',
        borderRadius: 10,
        width: 150,
    },
    button2: {
        alignSelf: 'center',
        backgroundColor: '#000000',
        borderRadius: 10,
        width: 150,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    input: {
        height: 40, 
        marginBottom: 15,
        borderBottomWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
    error: {
        color: 'red',
    },
    errorContainer: {
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor:'#ff00001c',
        padding: 5,
    }
})



export { SignInScreen }