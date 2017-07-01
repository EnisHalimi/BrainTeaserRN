/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

export default class brainteaser extends Component {
  render() {
    return (
      <Image source={require('./images/background.jpg')} style={styles.container}>
        <Text style={styles.welcome}>
          BrainTeaser!
        </Text>
        <Text style={styles.button}>
          We are the best at it
        </Text>
      </Image>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: null,
    width: null,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button:
  {
    color:'#FFFFFF'
  },
});

AppRegistry.registerComponent('brainteaser', () => brainteaser);
