import React, { useState } from 'react';
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

const AddReview = ({navigation}) => {
    const [name, setName] = useState(null);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(false);
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
                    value={name}
                    onChangeText={name => setName(name)}
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
                {loading && <ActivityIndicator size="large" color="black"/>}
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => {
                            submitReview({
                                name,
                                rating,
                                review,
                                setLoading,
                                bookId,
                                navigation
                            })
                        }
                    }
                    >
                    <Text
                        style={styles.submitButtonText}>Submit Review</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default AddReview;


const submitReview = ({
    name,
    rating,
    review,
    setLoading,
    bookId,
    navigation
}) => {
    setLoading(true);
    //https://bookreviews-api.herokuapp.com/api/Books/bookId/reviews
    const data = {
        userName: name,
        rating,
        description: review
    };
    axios.post(`${API_URL}Books/${bookId}/reviews`, data)
        .then(response => {
            setLoading(false);
            navigation.goBack();
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
        })

/*

https://bookreviews-api.herokuapp.com/api/Books/bookId/reviews
{
  "userName": "string",
  "rating": 0,
  "date": "2019-05-30T20:59:22.698Z",
  "description": "string"
}


https://bookreviews-api.herokuapp.com/api/Reviews
 {
  "userName": "string",
  "rating": 0,
  "date": "2019-05-30T20:59:22.804Z",
  "description": "string",
  "bookId": "string"
    }
 */
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