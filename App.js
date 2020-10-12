import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Instagram from './screens/Instagram.js';
import Facebook from './screens/Facebook.js';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: Facebook },
  Instagram: { screen: Instagram }
})

const AppContainer = createAppContainer(TabNavigator);
