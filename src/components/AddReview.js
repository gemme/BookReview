import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ActivityIndicator
} from 'react-native';
import {
    KeyboardAwareScrollView
 } from "react-native-keyboard-aware-scroll-view";
import Icon from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';

import { API_URL } from '../constants';

const AddReview = ({ navigation}) => {
    const [userName, setUserName] = useState(null);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const bookId = navigation.getParam('bookId');

    return (
        <KeyboardAwareScrollView
            style={{
                flex: 1,
                backgroundColor:'#FFF'
            }}
        >
            <View style={styles.root}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.goBack();
                    }}
                    >
                    <Icon name="close" size={30} color={"black"}/>
                </TouchableOpacity>
                <Text style={styles.addReview}>Book Review</Text>
                <TextInput
                    style={styles.input}
                    placeholder={"Name (optional)"}
                    value={userName}
                    onChangeText={name => setUserName(name)}
                    />
                <Text style={styles.rating}>Your rating:</Text>
                <View
                    style={styles.stars}>
                    { [1,2,3,4,5].map(i => {
                        return (
                            <TouchableOpacity
                                style={styles.startButton}
                                key={i}
                                onPress={() => {
                                    setRating(i)
                                }}>
                                <Icon
                                    name="star"
                                    size={50}
                                    color={ rating >= i ? "#FFD64C" : "#CCCCCC"}/>
                            </TouchableOpacity>)
                        })
                    }
                </View>
                {submitting && <ActivityIndicator size="large" color="black"/>}
                <TextInput
                    style={[
                        styles.input,
                        { height:100}
                    ]}
                    placeholder={"Review"}
                    value={review}
                    onChangeText={review => setReview(review)}
                    multiline={true}
                    numberOfLines={5}
                    />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => submitReview({ navigation, setSubmitting, userName, rating, review, bookId })}>
                    <Text
                        style={styles.submitButtonText}>Submit Review</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default AddReview;

const submitReview = ({navigation, setSubmitting, userName, rating, review, bookId}) => {
    setSubmitting(true);
    const data = {
        bookId,
        userName,
        rating,
        description: review
    };
    console.log('url', `${API_URL}Reviews`);
    console.log('data', data);
    axios
        .post(`${API_URL}Reviews`, data)
        .then(response => {
            console.log('response', response);
            setSubmitting(false);
            navigation.goBack();
        })
        .catch(err => {
            console.error(err)
            setSubmitting(false);
        });
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20
    },
    button: {
        paddingHorizontal: 10
    },
    addReview: {
        fontSize: 15,
        color: "#444",
        textAlign: "center",
        margin: 20
    },
    input: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 3
    },
    rating:{
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
        marginVertical: 40
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 80
    },
    startButton: {
        padding: 5
    },
    submitButton:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "black",
        borderRadius: 4,
        marginVertical: 10,
        marginHorizontal: 20
    },
    submitButtonText: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 18
    }
});