import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { IMG_URL } from '../constants';

import Star from './Star';

import ReviewList from './ReviewList';

 const BookInfo = ({navigation}) => {
     const book = navigation.getParam('book');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={ { uri: `${IMG_URL}${book.image}` }}
                    style={{
                        width: 100,
                        height: 100
                    }}
                />
                <View style={styles.edges}>
                    <Text style={styles.title}>{book.title}</Text>
                    <Text style={styles.author}>{`de ${book.author}`}</Text>
                    <Star rating={book.rating}/>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('AddReview', {
                                bookId: book.id
                            });
                        }}
                    >
                        <Text style={styles.info}>Add Review</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {book && <ReviewList bookId={book.id} />}
        </View>)
};

export default BookInfo;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 30
    }, edges: {
        padding: 10
    },
    title: {
        fontSize: 16
    },
    author: {
        fontSize: 10,
        color: 'grey'
    },
    button: {
        flex:1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 2
    },
    info:{
        fontSize: 10
    }
});
