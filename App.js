/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput , Text, View, FlatList} from 'react-native';
import Header from 'components/Header';
import BookRow from 'components/BookRow';

import axios from 'axios';

import  { API_URL } from './src/constants';

type Props = {};
const App = (props: Props) => {

  const [searchText, setSearchText] = useState('');

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}Books`)
      .then(({data}) => setBooks(data))
      .catch(err => console.error('My error', err))
  }, []);

    return (
      <View style={styles.container}>

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
          renderItem={({item, index}) => <BookRow book={item} index={index}/>}
          keyExtractor={item => item.name}
        />
      </View>
    );
};

export default App;

const styles = StyleSheet.create({
  'container': {
      'flex':1
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

