//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
import Post from '../components/post';
import Stories from '../components/Stories';
import { POSTS } from '../data/posts';

// create a component
const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
            {POSTS.map((post, index) => (
            <Post post={post} key={index} />
            ))}
            </ScrollView>
            <BottomTab />
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
export default HomeScreen;
