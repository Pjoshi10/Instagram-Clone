//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignedInStack from './Navigation';
import BottomTab from './src/components/BottomTab';
import AddPost from './src/screens/AddPostScreen';
import HomeScreen from './src/screens/HomeScreen';
// create a component
const App = () => {
  return (
    // <HomeScreen />
    // <AddPost />
    <SignedInStack />
    // <BottomTab/>
  );
};


export default App;
