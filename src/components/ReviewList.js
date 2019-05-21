import React from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet
} from 'react-native';

import { useEffect, useState } from 'react';

import axios from 'axios';

import { API_URL } from '../constants';

import ReviewRow from './ReviewRow';

const ReviewList = ({bookId}) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_URL}Books/${bookId}/reviews`)
            .then(response => {
                setReviews(response.data)
            })
            .catch(err => console.error('ReviewList: ', err));
    },[]);

    return (
        <View style={styles.container}>
            <Text style={styles.reviewHeader}>{'RESEÑAS DE LA COMUNIDAD'}</Text>
            <View style={styles.row}>
                <FlatList
                    data={reviews}
                    renderItem={
                        ({item}) => (
                            <ReviewRow review={item}/>
                        )
                    }
                    keyExtractor={item => item.id}
                    />
            </View>
        </View>
    );
};

export default ReviewList;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flex:1,
        flexDirection: 'row'
    },
    reviewHeader:{
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 20,
        fontWeight: '400'
    }
});