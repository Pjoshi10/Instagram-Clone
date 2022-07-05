//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ICONS } from '../data/icons';
// create a component
const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo}
                    source={ICONS.instagramText}
                />
            </TouchableOpacity>

            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('AddPostScreen')}>
                    <Image style={styles.icon} source={ICONS.addPost} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.icon} source={ICONS.like} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.unread}>
                        <Text style={styles.unreadText}>11</Text>
                    </View>
                    <Image style={styles.icon} source={ICONS.messenger} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        tintColor: 'white'
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    unread: {
        backgroundColor: 'red',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: "center",
        zIndex: 100,
    },
    unreadText: {
        color: 'white',
        fontWeight: '800',
    }
});

//make this component available to the app
export default Header;
