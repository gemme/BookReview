/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import BookList from 'components/BookList';
import BookInfo from 'components/BookInfo';

import {createStackNavigator, createAppContainer} from 'react-navigation';

type Props = {};
const AppNavigator = createStackNavigator({
    Home: { screen:  BookList},
    Info: { screen:  BookInfo}
  }, {
    defaultNavigationOptions: {
      title: 'Book Info',
      headerStyle: {
          backgroundColor: 'black',
          color: 'white'
      },
      headerTintColor: 'white',
      headerTitleColor: {
          color: 'white'
      }
    }
  });

export default createAppContainer(AppNavigator);


