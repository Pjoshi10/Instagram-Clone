//import liraries
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import SignupForm from '../components/SignupForm';
import { ICONS } from '../data/icons';

// create a component
const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={ICONS.instagramLogoColor} style={styles.logo} />
            </View>
            <SignupForm navigation={navigation}/>
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
export default SignupScreen;
