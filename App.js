/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View >
        <Text style={{
          textAlign: 'center',
          fontSize: 40,
          color: '#f44242',
          padding: 50,
          fontWeight: '300'

        }}>Book Review</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
