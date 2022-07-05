//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LoginForm from '../components/LoginForm';
import { ICONS } from '../data/icons';

// create a component
const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={ICONS.instagramLogoColor} style={styles.logo} />
            </View>
            <LoginForm navigation={navigation}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    logo: {
        height: 100,
        width: 100
    }
});

//make this component available to the app
export default LoginScreen;
