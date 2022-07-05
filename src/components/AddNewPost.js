//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ICONS } from '../data/icons';

// create a component
const Header = ({ navigation }) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
            <Image source={ICONS.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <Text></Text>
    </View>
)

const AddNewPost = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation = { navigation } />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backIcon: {
        tintColor: 'white',
        width: 30,
        height: 30,
    },
    headerText: {
        color: "white",
        fontWeight: '700',
        fontSize: 20,
        marginRight: 25,
    },
});

//make this component available to the app
export default AddNewPost;
