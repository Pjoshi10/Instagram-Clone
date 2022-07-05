//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

// create a component
const SignupForm = ({ navigation }) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        username: Yup.string().required().min(2, 'Username is required') ,
        password: Yup.string()
            .required()
            .min(6, 'Password must have atlease 6 characters')
    })

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', password: '', username: '' }}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                    <>
                        <View style={[styles.inputField, { borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red', }]}>
                            <TextInput
                                placeholder='Email'
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

                        <View style={[styles.inputField, { borderColor: values.username.length < 1 || values.username.length > 2 ? '#ccc' : 'red', }]}>
                        <TextInput
                                placeholder='Username'
                                placeholderTextColor='#444'
                                autoCapitalize='none'
                                textContentType='username'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>

                        <View style={[styles.inputField, { borderColor: 1 > values.password.length || values.password.length >= 6 ? '#ccc' : 'red', }]}>
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
                        <TouchableOpacity style={styles.button(isValid)} disabled={!isValid} >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={styles.signupContainer}>
                            <Text >Already a user? </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()} >
                                <Text style={styles.signupText}>Log In</Text>
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
export default SignupForm;
