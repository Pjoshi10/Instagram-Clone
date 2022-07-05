//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AddPostScreen from './src/screens/AddPostScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

// create a component
const Stack = createNativeStackNavigator();

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen'
                screenOptions={{ headerShown: false, }}
            >
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='SignupScreen' component={SignupScreen} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='AddPostScreen' component={AddPostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default SignedInStack;
