import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import DefaultUser from 'assets/default-user.png'

import Star from './Star';

import moment from 'moment';

import axios from 'axios';

const ReviewRow = ({review}) => {
    const [userImage, setUserImage] = useState(null);

    useEffect(() => {
        axios.get('https://bookreviews-api.herokuapp.com/api/Containers/photos/download/gemme.jpg')
            .then(response => {
                if(response.config){
                    setUserImage({
                        uri: response.config.url
                    });
                }else{
                    setUserImage(DefaultUser);
                }
            })
            .catch(err => {
                console.log(err);
                setUserImage(DefaultUser);
            })
    }, []);

    return (
        <View style={styles.container}>
           <View style={styles.userInfo}>
                <Image source={userImage} style={{
                    width: 30,
                    height: 30
                }}/>
                <View style={styles.edges}>
                    <Text style={styles.user}>{`${review.userName} le dio una calificación`}</Text>
                    <View style={styles.star}>
                        <Text style={styles.from}> {'de'} </Text>
                        <Star rating={review.rating} color={"red"}/>
                    </View>
                    <Text style={styles.date}>{moment(review.date).format("DD/MM/YYYY h:mm:ss")}</Text>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={styles.description}>{review.description}</Text>
            </View>
            <View style={styles.divider}><Text>{''}</Text></View>
        </View>
    );
};

export default ReviewRow;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5
    },
    userInfo:{
        flex: 1,
        flexDirection: 'row'
    },
    edges: {
        paddingHorizontal: 10
    },
    user: {
        fontSize: 14
    },
    from : {
        fontSize: 14
    },
    star: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        fontSize: 10
    },
    description:{
        paddingVertical: 5
    },
    divider:{
        flex: 1,
        width: '100%',
        borderColor: 'grey',
        borderWidth: .5,
        height: 0
    }
})