//@flow
import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput , Text, View, FlatList, Image} from 'react-native';
import Header from 'components/Header';

import axios from 'axios';

import  { API_URL } from '../constants';
import BookRow from 'components/BookRow';
import BookImage from 'assets/book.png';

import * as bookActions from 'redux-store/actions/book';
import { connect } from 'react-redux';

type Props = {};

const BookList = ({navigation, books, loadBooks}: Props) => {

    const [searchText, setSearchText] = useState('');

    /* const [books, setBooks] = useState([]);

    useEffect(() => {
      axios
        .get(`${API_URL}Books`)
        .then(({data}) => setBooks(data))
        .catch(err => console.error('My error', err))
    }, []); */
    //component did mount
    useEffect(() => {
        loadBooks();
    }, [])

    return (
    <View style={styles.container}>
        <View style={{
            alignItems: 'center',
            marginTop: 30
        }}>
            <Image
            source={BookImage}
            style={{
                width: 50,
                height: 50,
            }}
            />
        </View>

        <Header />

            <TextInput
            style={styles.txtInput}
            placeholder='Search'
            onChangeText={ text => {
                setSearchText(text);
            }}
            />
            <FlatList
                data={
                    books.filter(book => {
                        return book.title.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1
                    })
                }
                renderItem={({item, index}) => <BookRow book={item} index={index} navigation={navigation}/>}
                keyExtractor={item => item.id}
            />
    </View>
    );
};

// Disable header is enabled by default
BookList.navigationOptions = {
    header: null
};

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadBooks: () => dispatch(bookActions.loadBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

const styles = StyleSheet.create({
    'container': {
        'flex':1,
        'backgroundColor': '#FFF'
    },
    'txtInput': {
      padding: 10,
      paddingHorizontal: 20,
      fontSize: 16,
      borderBottomWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#F5F5F5'
    }
  });
