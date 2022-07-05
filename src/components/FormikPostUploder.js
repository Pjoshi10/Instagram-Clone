//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Divider } from '@rneui/base';

// create a component
const PLACEHOLDER_IMG = 'https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1310632172.jpg';
const UploadPostSchema = yup.object().shape({
    imageUrl: yup.string().url().required('A URL is required'),
    caption: yup.string().max(2200, 'Caption has reached the characters limit'),
})

const FormikPostUploder = ({ navigation }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => {console.log(values)
            console.log('your post was subimitted successfully!!');
            navigation.goBack()
            }}
            validationSchema={UploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
                <>
                    <View style={{
                        margin: 20,
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <Image source={{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}}
                        style={{width: 100, height: 100,}} />
                    
                    <View style={{flex: 1, marginLeft: 12}}>
                    <TextInput
                    style={{color: 'white', fontSize: 20}}
                        placeholder='write caption'
                        placeholderTextColor={'grey'}
                        multiline={true}
                        onChangeText={handleChange('caption')}
                        onBlur={handleBlur('caption')}
                        value={values.caption}
                    />
                    </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput
                    onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                    style={{color: 'white', fontSize: 18}}
                        placeholder='enter image url'
                        placeholderTextColor={'grey'}
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <Button onPress={handleSubmit} title='share' disabled={!isValid}/>
                </>
            }
        </Formik>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default FormikPostUploder;
