//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import AddNewPost from '../components/AddNewPost';
import FormikPostUploder from '../components/FormikPostUploder';

// create a component
const AddPostScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <AddNewPost navigation={ navigation }/>
            <FormikPostUploder navigation={ navigation } />
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});

//make this component available to the app
export default AddPostScreen;
