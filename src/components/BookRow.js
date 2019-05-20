import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import {IMG_URL} from '../constants';

import Star from './Star';

const BookRow = ({book, index}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <View>
            <View
                key={index}
                style={[
                styles.row,
                { backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }
                ]}>
                <View style={styles.edges}>
                    <Image
                        source={{uri:`${IMG_URL}${book.image}`}}
                        style={{
                            width: 60,
                            height: 80
                        }}
                    />
                </View>
                <View
                    style={styles.bookContainer}>
                    <View style={styles.titleBook}>
                        <Text>{book.title}</Text>
                        <Text style={styles.author}>{`de ${book.author}`}</Text>
                    </View>
                    <Star rating={book.rating}/>
                </View>
                <View style={styles.edges}>
                    <TouchableOpacity
                        onPress={() => {
                            setShowInfo(!showInfo);
                        }}
                        style={styles.button}
                    >
                        <Text>Info</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {showInfo &&
                <View>
                    <Text>Book Info</Text>
                </View>}
        </View>
    )
};

export default BookRow;

const styles = StyleSheet.create({
    'row': {
      flexDirection: 'row',
        height: 100
    },
    'edges': {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 50
    },
    'bookContainer': {
        flex: 8,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    'titleBook':{
        fontSize: 200
    },
    'author': { color: 'grey'},
    'button': {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 2
    }
  });