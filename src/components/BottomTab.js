//import liraries
import { Divider } from '@rneui/base';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { ICONNAMES } from '../data/iconNames';
import { ICONS } from '../data/icons';
// create a component

const Os = Platform.OS;
console.log(Os);
const BottomTab = () => {
    const [activeTab, setActiveTab] = useState(ICONNAMES.homeActive)

    const Icon = ({ imgStyle, imgUrl, imgName }) => (
        <TouchableOpacity onPress={() => setActiveTab(imgName)}>
            <Image style={imgStyle} source={imgUrl} />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                <Icon imgStyle={styles.icon} imgUrl={activeTab == ICONNAMES.homeActive ? ICONS.homeActive : ICONS.homeInactive} imgName={ICONNAMES.homeActive} />

                <Icon imgStyle={styles.icon} imgUrl={activeTab == ICONNAMES.searchActive ? ICONS.searchActive : ICONS.searchInctive} imgName={ICONNAMES.searchActive} />

                <Icon imgStyle={styles.icon} imgUrl={activeTab == ICONNAMES.reelActive ? ICONS.reelActive : ICONS.reelInactive} imgName={ICONNAMES.reelActive} />

                <Icon imgStyle={styles.icon} imgUrl={activeTab == ICONNAMES.liked ? ICONS.liked : ICONS.like} imgName={ICONNAMES.liked} />

                <TouchableOpacity onPress={() => setActiveTab('user')}>
                    <Image style={activeTab == 'user' ? styles.userActive : styles.userInactive} source={require('/Users/macos20/Desktop/instagram_Clone/src/assets/images/users/hiritik_profile.jpeg')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: Os == "ios" ? '3%' : 0,
        zIndex: 999,
        backgroundColor: 'black',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    icon: {
        height: 40,
        width: 40,
        tintColor: 'white',
    },
    userInactive: {
        height: 40,
        width: 40,
        borderRadius: 50,
        borderWidth: 2,
    },
    userActive: {
        height: 40,
        width: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white'
    }
});

//make this component available to the app
export default BottomTab;
