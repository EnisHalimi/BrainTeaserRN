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
import OrderNumbers from './app/OrderNumbers';

export default class brainteaser extends Component {

  constructor() {
      super()
      this.state = {
        menu: true,
        wordgame: false,
        orderNumbers: false,

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
          Welcome to Brain Teaser
        </Text>
         <TouchableOpacity style={styles.button} onPress={ () => this.wordGame()}>
          <Text style={styles.buttonText}>Play Word Game</Text> 
           </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.orderNumbers()}>
          <Text style={styles.buttonText}>Play Order Numbers</Text> 
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
    else if (this.state.orderNumbers)
      return(<OrderNumbers />)
  }

  wordGame()
  {
    this.setState({
      menu: false,
      wordgame: true,
      orderNumbers: false,
    });
  }

   orderNumbers()
  {
    this.setState({
      menu: false,
      wordgame: false,
      orderNumbers: true,
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
