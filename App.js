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
import About from 'components/About';
import AddReview from 'components/AddReview';

import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

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

const TabNavigator = createBottomTabNavigator({
    List: {screen: AppNavigator},
    About: {screen: About}
  }, {
    defaultNavigationOptions:({navigation}) => {
      return {
        tabBarIcon: ({tintColor}) => {
          const route = navigation.state.routeName;
          const name = {
            'List': 'list',
            'About': 'info-circle'
          }[route];
          return <Icon name={name} color={tintColor} size={23} />
        }
      }
    }, tabBarOptions: {
        activeBackgroundColor: 'lightgrey',
        inactiveTintColor: 'lightgrey',
        activeTintColor: 'black',
    }
  });

  const MainNavigator = createStackNavigator({
    Tabs: {screen: TabNavigator},
    AddReview: {screen: AddReview}
  }, {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  })

export default createAppContainer(MainNavigator);


