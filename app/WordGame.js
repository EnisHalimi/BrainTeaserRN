
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';



var words =["Sun","Moon","Football", "Game", "Brain", "Mother", "Father", "Sister","Brother", "Mobile","Computer", "Through",
        "Great",
        "Much",
        "Before",
        "Cause",
        "Differ",
        "Against",
        "Pattern",
        "Center",
        "Money",
        "Person",
        "Sentence",
        "Home",
        "Power",
        "Certain",
        "Science",
        "Govern",
        "Machine",
        "Dark",
        "Figure",
        "Toward",
        "Simple"];

export default class WordGame extends Component {
 static navigationOptions = {
    title: 'Word Game',
  };

  constructor() {
      super()
      this.state = {
         button1: 'Button',
         button2: 'Button',
         button3: 'Button',
         word: 'Word',
         scrambleword: 'Word',
         buttonVisibility: true,
         gameStarted: false,
         score: 0,
         counter: 0,

      }
   }

  render() {
    return (
      <View style={styles.menu}>
    <Text style={styles.welcome}>
          {this.state.scrambleword}
        </Text>
         <TouchableOpacity disabled={this.state.buttonVisibility} style={styles.button} onPress={ () => this.checkGame('button1')}>
          <Text style={styles.buttonText}> {this.state.button1}</Text> 
           </TouchableOpacity>
            <TouchableOpacity disabled={this.state.buttonVisibility} style={styles.button} onPress={() => this.checkGame('button2')}>
          <Text style={styles.buttonText}>{this.state.button2}</Text> 
           </TouchableOpacity>
            <TouchableOpacity disabled={this.state.buttonVisibility} style={styles.button} onPress={() => this.checkGame('button3')}>
          <Text style={styles.buttonText}>{this.state.button3}</Text> 
           </TouchableOpacity>
           {this.startButton()}                
           <Text style={styles.welcome}>
              {this.state.score}/{this.state.counter}
        </Text>
           </View>
    );

  }
  
  startButton()
  {
    if(!this.state.gameStarted)
            {
            return (<TouchableOpacity  style={styles.buttonStart} onPress={() => this.startGame()}>
          <Text style={styles.buttonText}>Start</Text> 
           </TouchableOpacity>)
            }
    else if (this.state.counter == 20) 
    {
       
         return (
          <TouchableOpacity style={styles.buttonStart} onPress={() => this.gameOver() }>
          <Text style={styles.buttonText}>Return to Main Menu</Text> 
           </TouchableOpacity>)
         
    }
    else 
       return (<TouchableOpacity  style={styles.buttonStart} onPress={() => this.startGame()}>
          <Text style={styles.buttonText}>Next</Text> 
           </TouchableOpacity>)


  }

  gameOver()
  {
    alert('Game Over');
    this.setState({ buttonVisibility: true,
          scrambleword: 'Game Over',
          button1:'Game Over',
          button2: 'Game Over',
          button3: 'Game Over',
        });
    
    
  }

  startGame()
  {
      var scrambledwords = "";
      for( i =0;i< words.length;i++)
      {
          var temp = words[i];
          var random = Math.floor((Math.random() * words.length));
          words[i] = words[random];
          words[random] = temp;
       }
       var nr = Math.floor((Math.random() * 2));  
       var scrambled = words[nr];
       var scrambledarray = scrambled.split("");
       for( i =0;i< scrambledarray.length;i++)
       {
          var temp = scrambledarray[i];
          var random = Math.floor((Math.random() * scrambledarray.length));
          scrambledarray[i] = scrambledarray[random];
          scrambledarray[random] = temp;
       }
       for( i =0;i< scrambled.length;i++)
       {
          scrambledwords += scrambledarray[i];
       }
        this.setState({
             gameStarted: true,
             buttonVisibility: false,
              counter: this.state.counter+1,
             button1: words[0],
             button2: words[1],
             button3: words[2],
             word: words[nr],
             scrambleword: scrambledwords,
        });
    }

    checkGame(button)
    {
       var word = this.state.word;
       var button1 = this.state.button1;
       var button2 = this.state.button2;
       var button3 = this.state.button3;
       if(button1 == word && button == 'button1')
       {
          alert('Correct');
          this.setState({
            score: this.state.score+1,
             buttonVisibility: true,
        
          });
       }
      else if(button2 == word && button == 'button2')
      {
          
        alert('Correct');
        this.setState({
          score: this.state.score+1,
             buttonVisibility: true,
   
        });
      }
      else if(button3 == word && button == 'button3')
      {
            alert('Correct');
            this.setState({
              score: this.state.score+1,
             buttonVisibility: true,
         
            });
      }
      else
      {
            alert('Wrong');
             this.setState({
             buttonVisibility: true,
            
            });
      }
    }
}

const styles = StyleSheet.create({
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
   buttonStart:
  {
    backgroundColor: '#00B16A',
    width: 280,
    padding: 10,
    marginTop: 10,
  },
  buttonText:
  {
    color: '#FFFFFF',
    textAlign:  'center'

  },
});

