//import liraries
import { Divider } from '@rneui/base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ICONS } from '../data/icons';

// create a component
const Post = ({ post }) => {
    return (
        <View style={styles.postContainer}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10, }}>
                <Postfooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    );
};

const PostHeader = ({ post }) => (
    <View style={styles.postHeaderContainer}>
        <View style={styles.postHeaderSubContainer}>
            <Image source={post.profilePicture} style={styles.postHeaderImage} />
            <Text style={styles.postHeaderText}>{post.userName}</Text>
        </View>

        <View>
            <TouchableOpacity>
            <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const PostImage = ({ post }) => (
    <View style={styles.postImageContainer}>
        <Image source={post.postImage} style={styles.postImageImage} />
    </View>
)

const Postfooter = ({ post }) => (
    <View style={{ flexDirection: 'row', }}>
        <View style={styles.postFooterIconContainerLeft}>
            <Icon imgStyle={styles.postFooterIcon} imgUrl={ICONS.like} />
            <Icon imgStyle={styles.postFooterIcon} imgUrl={ICONS.comment} />
            <Icon imgStyle={styles.postFooterIcon} imgUrl={ICONS.share} />
        </View>

        <View style={styles.postFooterIconContainerRight}>
            <Icon imgStyle={styles.postFooterIcon} imgUrl={ICONS.unsaved} />
        </View>
    </View>

)

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={imgUrl} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={styles.likesContainer}>
        <Text style={styles.likesText} >{post.likes.toString()} likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={styles.captionContainer}>
        <Text style={styles.captionText}>
            <Text style={styles.captionUsername}>{post.userName}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)

const CommentSection =({post}) => (
    <View style={{marginTop: 5,}}>
        {!!post.comments.length && (
    <Text style={{color: 'grey'}}>
        View
        {post.comments.length > 1 ? ' all ' : ' '}
        {post.comments.length}
        {post.comments.length > 1 ? ' comments' : ' comment'}
    </Text>
        )}
    </View>
)

const Comments = ({post}) => (
    <>
    {
        post.comments.map((comment, index) => (
            <View key={index} style={styles.commentContainer}>
                <Text style={styles.commentText}>
                    <Text style={styles.commentUsername}>
                        {comment.userName} {" "}
                    </Text>
                    {comment.comment}
                </Text>
            </View>
        )
        )}
    </>
)
// define your styles
const styles = StyleSheet.create({
    postContainer: {
        marginBottom: 30,
    },
    postHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
    },
    postHeaderSubContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    postHeaderImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    },
    postHeaderText: {
        color: 'white',
        marginLeft: 5,
        fontWeight: '700'
    },
    postImageContainer: {
        width: '100%',
        height: 450,
    },
    postImageImage: {
        height: "100%",
        width: '100%',
        resizeMode: 'cover'
    },
    postFooterIcon: {
        width: 33,
        height: 33,
        tintColor: 'white',
    },
    postFooterIconContainerLeft: {
        flexDirection: 'row',
        width: "32%",
        justifyContent: 'space-between',
    },
    postFooterIconContainerRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
    likesContainer: {
        flexDirection: 'row',
        marginTop: 4,
    },
    likesText: {
        color: 'white',
        fontWeight: '600',
    },
    captionContainer: {
        marginTop: 5,
    },
    captionText: {
        color: 'white',
    },
    captionUsername: {
        fontWeight: '600',
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    commentText: {
        color: 'white',
    },
    commentUsername: {
        fontWeight: '600',
    },


});

//make this component available to the app
export default Post;
