/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderStyle from './HeaderStyle';



const books = [
  { title: 'El Perfume', author:'Patrick Süskind' },
  { title: 'La insoportable levedad del ser', author:'Milan Kundera' },
  { title: 'Azteca', author:'Gary Jennings' }
];

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={HeaderStyle.header}>Book Review</Text>

        {books.map((book, i) => {
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
  }
}

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
  'author': { color: 'grey'}
});

