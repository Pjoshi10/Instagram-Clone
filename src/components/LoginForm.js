//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Pressable, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
// import firebase from '../../Firebase';

// create a component
const LoginForm = ({ navigation }) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string()
            .required()
            .min(6, 'Password must have atlease 6 characters')
    })

    // const OnLogin = async(email, password) => {
    //     try{
    //         await firebase.auth().signInWithEmailAndPassword(email, password)
    //         console.log("firebase login successful", email, password);
    //     } catch(error) {
    //         Alert.alert(error.message)
    //     }
    // }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{email: '', password: ''}}
                // onSubmit={values => {
                //     OnLogin(values.email, values.password)
                // }}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>(
                    <>
                    <View style={[styles.inputField,{borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red',}]}>
                <TextInput
                    placeholder='Phone number, username or Email'
                    placeholderTextColor='#444'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                />
            </View>

            <View style={[styles.inputField,{borderColor: 1 > values.password.length || values.password.length >= 6 ? '#ccc' : 'red',}]}>
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='#444'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                />
            </View>
            <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                <TouchableOpacity>
                    <Text style={{ color: '#6BB0E5' }} >Forgot password</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button(isValid)} disabled={!isValid} >
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
                <Text >Don't have an account? </Text>
                <TouchableOpacity onPress={() => (
                    values.email = "",
                    values.password = "",
                    navigation.push('SignupScreen')
                )} >
                    <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
                    </>
                )
            }
            
            </Formik>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1
    },
    button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
    }),
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    },
    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    },
    signupText: {
        color: '#6BB0E5',
    }
});

//make this component available to the app
export default LoginForm;
