//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { USERS } from '../data/users';
// create a component
const Stories = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >

                {USERS.map((story, index) => (
                    <View key={index} style={styles.story}>
                        <Image source={story.profilePicture}
                            style={styles.storyImage}
                        />
                        <Text style={styles.userName}>{
                            story.userName  .length > 11 ? story.userName.slice(0,10).toLowerCase() + "..." : story.userName.toLowerCase()
                        }</Text>
                        </View>
                ))}
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 13,
    },
    story: {
        alignItems: 'center',
    },
    storyImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501'
    },
    userName: {
        color: 'white',
    },
});

//make this component available to the app
export default Stories;
