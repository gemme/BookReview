/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, TextInput , Text, View} from 'react-native';
import HeaderStyle from './HeaderStyle';
import Header from './Header';


const books = [
  { title: 'El Perfume', author:'Patrick Süskind' },
  { title: 'La insoportable levedad del ser', author:'Milan Kundera' },
  { title: 'Azteca', author:'Gary Jennings' }
];

type Props = {};
const App = (props: Props) => {

  const [searchText, setSearchText] = useState('');

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

        {books
          .filter(book => {
            return book.title.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1
          })
          .map((book, i) => {
          return (
            <View
            key={i}
            style={[
              styles.row,
              {
                backgroundColor: i % 2 === 0 ? 'white' : '#F3F3F7'
              }
            ]}>
                <View style={styles.edges}>
                <Text>{i + 1 } </Text>
                </View>
                <View style={styles.titleBook}>
                  <Text>{book.title}</Text>
                  <Text style={styles.author}>{`de ${book.author}`}</Text>
                </View>
                <View style={styles.edges}>
                  <Text>Info</Text>
                </View>
            </View>)
        })}
      </View>
    );
};

export default App;

const styles = StyleSheet.create({
  'container': {
      'flex':1
  },
  'row': {
    flexDirection: 'row'
  },
  'edges': {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  'titleBook': {
      flex: 8,
      flexDirection: 'column'
  },
  'author': { color: 'grey'},
  'txtInput': {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
});

