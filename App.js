/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';


const books = [
  { title: 'El Perfume', author:'Patrick Süskind' },
  { title: 'La insoportable levedad del ser', author:'Milan Kundera' },
  { title: 'Azteca', author:'Gary Jennings' }
]

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 40,
          color: '#f44242',
          padding: 50,
          fontWeight: '300'

        }}>Book Review</Text>

        {books.map((book, i) => {
          return (
            <View
            key={i}
            style={{
              flexDirection: 'row'
            }}>
                <View style={{
                  flex:1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Text>{i + 1 } </Text>
                </View>
                <View style={{
                  flex: 8,
                  flexDirection: 'column'
                }}>
                  <Text>{book.title}</Text>
                  <Text style={{ color: 'grey'}}>{`de ${book.author}`}</Text>
                </View>
                <View style={{
                  flex:1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text >Info</Text>
                </View>
            </View>)
        })}
      </View>
    );
  }
}

