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
  Image,
  TouchableOpacity
} from 'react-native';
import WordGame from './app/WordGame';

export default class brainteaser extends Component {

  constructor() {
      super()
      this.state = {
        menu: true,
        wordgame: false,

      }
   }

  render() {
    return (
       <Image source={require('./app/images/background.jpg')} style={styles.bg}>
      {this.activityChange()}
          
        </Image>
    );
  }

  activityChange()
  {
    if(this.state.menu)
    {
        return (   <View style={styles.menu}>
        <Text style={styles.welcome}>
          Welcome to BrainTeaser
        </Text>
         <TouchableOpacity style={styles.button} onPress={ () => this.wordGame()}>
          <Text style={styles.buttonText}>Play</Text> 
           </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
          <Text style={styles.buttonText}>Achievements</Text> 
           </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
          <Text style={styles.buttonText}>Options</Text> 
           </TouchableOpacity>
           </View>)
    }
    else if(this.state.wordgame)
    {
      return (<WordGame />)
    }
  }

  wordGame()
  {
    this.setState({
      menu: false,
      wordgame: true,
    });
  }
}

const styles = StyleSheet.create({
    bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: null,
    width: null,
    position: 'relative',
    resizeMode: 'cover',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 25,
  },
  menu:
  {
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  button:
  {
    backgroundColor: '#95a5a6',
    width: 280,
    padding: 10,
    marginBottom: 10,
  },
  buttonText:
  {
    color: '#FFFFFF',
    textAlign:  'center'

  },
});

AppRegistry.registerComponent('brainteaser', () => brainteaser);
