import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class OrderNumbers extends Component {

  constructor() {
      super()
      this.state = {
        
         button1: 1,
         button2: 2,
         button3: 3,
         button4: 4,
         button5: 5,
         button6: 6,
         button7: 7,
         button8: 8,
         button9: 9,
         button1vis: true,
         button2vis: true,
         button3vis: true,
         button4vis: true,
         button5vis: true,
         button6vis: true,
         button7vis: true,
         button8vis: true,
         button9vis: true,
         gameStarted: false,
         score: 0,
         counter: 0,
         gamecounter:1,
      }
   }

  render() {
    return (
    	<View style={styles.container}>
    	<View style={styles.firstRow}>
    	 <TouchableOpacity disabled={this.state.button1vis} style={styles.button} onPress={ () => this.checkGame('button1')}>
          <Text style={styles.buttonText}> {this.state.button1}</Text> 
           </TouchableOpacity>
            <TouchableOpacity disabled={this.state.button2vis} style={styles.button} onPress={() => this.checkGame('button2')}>
          <Text style={styles.buttonText}>{this.state.button2}</Text> 
           </TouchableOpacity>
            <TouchableOpacity disabled={this.state.button3vis} style={styles.button} onPress={() => this.checkGame('button3')}>
          <Text style={styles.buttonText}>{this.state.button3}</Text> 
           </TouchableOpacity>
    	</View>

    	<View style={styles.secondRow}>
    	 <TouchableOpacity disabled={this.state.button4vis} style={styles.button} onPress={ () => this.checkGame('button4')}>
          <Text style={styles.buttonText}> {this.state.button4}</Text> 
           </TouchableOpacity>
            <TouchableOpacity disabled={this.state.button5vis} style={styles.button} onPress={() => this.checkGame('button5')}>
          <Text style={styles.buttonText}>{this.state.button5}</Text> 
           </TouchableOpacity>
            <TouchableOpacity disabled={this.state.button6vis} style={styles.button} onPress={() => this.checkGame('button6')}>
          <Text style={styles.buttonText}>{this.state.button6}</Text> 
           </TouchableOpacity>
    	</View>

		<View style={styles.thirdRow}>
    	 <TouchableOpacity disabled={this.state.button7vis} style={styles.button} onPress={ () => this.checkGame('button7')}>
          <Text style={styles.buttonText}> {this.state.button7}</Text> 
           </TouchableOpacity>
            <TouchableOpacity disabled={this.state.button8vis} style={styles.button} onPress={() => this.checkGame('button8')}>
          <Text style={styles.buttonText}>{this.state.button8}</Text> 
           </TouchableOpacity>
            <TouchableOpacity disabled={this.state.button9vis} style={styles.button} onPress={() => this.checkGame('button9')}>
          <Text style={styles.buttonText}>{this.state.button9}</Text> 
           </TouchableOpacity>
    	</View>
    	 {this.startButton()}
    	  <Text style={styles.welcome}>
              {this.state.score}/{this.state.counter}
        </Text>     
    	</View>


     
    );
  }

  startButton()
  {
    if(this.state.counter == 20) 
   {
    return (<TouchableOpacity style={styles.buttonStart} onPress={() => this.Restart() }>
          <Text style={styles.buttonText}>Restart</Text> 
           </TouchableOpacity>) 
    }
    else if(!this.state.gameStarted )
            {
            return (<TouchableOpacity  style={styles.buttonStart} onPress={() => this.startGame()}>
          <Text style={styles.buttonText}>Start</Text> 
           </TouchableOpacity>)
            }
         
    
    else 
    {
       return (<TouchableOpacity style={styles.buttonStart} disabled={true}>
          <Text style={styles.buttonText}>Game Started</Text> 
           </TouchableOpacity>)
    }
}


    
  Restart()
  {
  	this.setState({
  		gameStarted: false,
        button1vis: true,
        button2vis: true,
        button3vis: true,
        button4vis: true,
        button5vis: true,
        button6vis: true,
        button7vis: true,
       	button8vis: true,
        button9vis: true,
        button1: ' ',
		        button2: ' ',
		        button3: ' ',
		        button4: ' ',
		        button5: ' ',
		        button6: ' ',
		        button7: ' ',
		        button8: ' ',
		        button9: ' ',
        counter:0,
        score: 0, 	
  	});
  }

  startGame()
  {
  	var numbers = [1,2,3,4,5,6,7,8,9];
    for( i =0;i< numbers.length;i++)
    {
        var temp = numbers[i];
        var random = Math.floor((Math.random() * numbers.length));
        numbers[i] = numbers[random];
        numbers[random] = temp;
    }
    this.setState({
        gameStarted: true,
        button1vis: false,
        button2vis: false,
        button3vis: false,
        button4vis: false,
        button5vis: false,
        button6vis: false,
        button7vis: false,
       	button8vis: false,
        button9vis: false,
        gamecounter: 1,
        counter: this.state.counter+1, 
        button1: numbers[0],
        button2: numbers[1],
        button3: numbers[2],
        button4: numbers[3],
        button5: numbers[4],
        button6: numbers[5],
        button7: numbers[6],
        button8: numbers[7],
        button9: numbers[8],

        });
    }

    checkGame(button)
    {
       var counter = this.state.gamecounter;
       if(counter == 9)
       {
       		alert('Correct');
       		this.setState({
       	
       			button1vis: true,
		        button2vis: true,
		        button3vis: true,
		        button4vis: true,
		        button5vis: true,
		        button6vis: true,
		        button7vis: true,
		        button8vis: true,
		        button9vis: true,
		        button1: ' ',
		        button2: ' ',
		        button3: ' ',
		        button4: ' ',
		        button5: ' ',
		        button6: ' ',
		        button7: ' ',
		        button8: ' ',
		        button9: ' ',
         		gameStarted: false,
         		score: this.state.score+1,
       		});
       }
       else
       {
	       if(button == 'button1')
	       {
	       		if(this.state.button1 == counter)
	       		{
	       			this.setState({
	       				gamecounter: this.state.gamecounter+1,
	       				button1vis: true,
	       				button1: ' ',

	       			});
	       		}
	       		else
	       		{
	       			alert('Wrong');
		       			this.setState({
		       		
		       			button1vis: true,
				         button2vis: true,
				         button3vis: true,
				         button4vis: true,
				         button5vis: true,
				         button6vis: true,
				         button7vis: true,
				         button8vis: true,
				         button9vis: true,
		         		gameStarted: false,
   		       		});
	       		}
	       }
	       else if (button == 'button2')
	       {
	       		if(this.state.button2 == counter)
	       		{
	       			this.setState({
	       				gamecounter: this.state.gamecounter+1,
	       				button2vis: true,
	       				button2: ' ',

	       			});
	       		}
	       		else
	       		{
	       			alert('Wrong');
		       			this.setState({
		       			
		       			button1vis: true,
				         button2vis: true,
				         button3vis: true,
				         button4vis: true,
				         button5vis: true,
				         button6vis: true,
				         button7vis: true,
				         button8vis: true,
				         button9vis: true,
		         		gameStarted: false,
   		       		});
	       		}
	       }
	       else if (button == 'button3') 
	       {
	       		if(this.state.button3 == counter)
	       		{
	       			this.setState({
	       				gamecounter: this.state.gamecounter+1,
	       				button3vis: true,
	       				button3: ' ',

	       			});
	       		}
	       		else
	       		{
	       			alert('Wrong');
		       			this.setState({
		       			button1vis: true,
				         button2vis: true,
				         button3vis: true,
				         button4vis: true,
				         button5vis: true,
				         button6vis: true,
				         button7vis: true,
				         button8vis: true,
				         button9vis: true,
		         		gameStarted: false,
   		       		});
	       		}
	       }	
	       else if (button == 'button4')
	       {	
	       		if(this.state.button4 == counter)
	       		{
	       			this.setState({
	       				gamecounter: this.state.gamecounter+1,
	       				button4vis: true,
	       				button4: ' ',

	       			});
	       		}
	       		else
	       		{
	       			alert('Wrong');
		       			this.setState({
		       			button1vis: true,
				         button2vis: true,
				         button3vis: true,
				         button4vis: true,
				         button5vis: true,
				         button6vis: true,
				         button7vis: true,
				         button8vis: true,
				         button9vis: true,
		         		gameStarted: false,
   		       		});
	       		}
	       }
	        else if (button == 'button5')
	       {
	       		if(this.state.button5 == counter)
	       		{
	       			this.setState({
	       				gamecounter: this.state.gamecounter+1,
	       				button5vis: true,
	       				button5: ' ',

	       			});
	       		}
	       		else
	       		{
	       			alert('Wrong');
		       			this.setState({
		       			button1vis: true,
				         button2vis: true,
				         button3vis: true,
				         button4vis: true,
				         button5vis: true,
				         button6vis: true,
				         button7vis: true,
				         button8vis: true,
				         button9vis: true,
		         		gameStarted: false,
   		       		});
	       		}
	       }
	       else if (button == 'button6') 
	       {
	       		if(this.state.button6 == counter)
	       		{
	       			this.setState({
	       				gamecounter: this.state.gamecounter+1,
	       				button6vis: true,
	       				button6: ' ',

	       			});
	       		}
	       		else
	       		{
	       			alert('Wrong');
		       			this.setState({
		       			button1vis: true,
				         button2vis: true,
				         button3vis: true,
				         button4vis: true,
				         button5vis: true,
				         button6vis: true,
				         button7vis: true,
				         button8vis: true,
				         button9vis: true,
		         		gameStarted: false,
   		       		});
	       		}
	       }
	       else if (button == 'button7')
	       {
	       		if(this.state.button7 == counter)
	       		{
	       			this.setState({
	       				gamecounter: this.state.gamecounter+1,
	       				button7vis: true,
	       				button7: ' ',

	       			});
	       		}
	       		else
	       		{
	       			alert('Wrong');
		       			this.setState({
		       			button1vis: true,
				         button2vis: true,
				         button3vis: true,
				         button4vis: true,
				         button5vis: true,
				         button6vis: true,
				         button7vis: true,
				         button8vis: true,
				         button9vis: true,
		         		gameStarted: false,
   		       		});
	       		}
	       }
	       else if (button == 'button8')
	       {
	       		if(this.state.button8 == counter)
	       		{
	       			this.setState({
	       				gamecounter: this.state.gamecounter+1,
	       				button8vis: true,
	       				button8: ' ',

	       			});
	       		}
	       		else
	       		{
	       			alert('Wrong');
		       			this.setState({
		       			button1vis: true,
				         button2vis: true,
				         button3vis: true,
				         button4vis: true,
				         button5vis: true,
				         button6vis: true,
				         button7vis: true,
				         button8vis: true,
				         button9vis: true,
		         		gameStarted: false,
   		       		});
	       		}
	       }
	       else
	       {
	       		if(this.state.button9 == counter)
	       		{
	       			this.setState({
	       				gamecounter: this.state.gamecounter+1,
	       				button9vis: true,
	       				button9: ' ',

	       			});
	       		}
	       		else
	       		{
	       			alert('Wrong');
		       			this.setState({
		       			button1vis: true,
				         button2vis: true,
				         button3vis: true,
				         button4vis: true,
				         button5vis: true,
				         button6vis: true,
				         button7vis: true,
				         button8vis: true,
				         button9vis: true,
		         		gameStarted: false,
   		       		});
	       		}
	       }
   }
    }
}

  


const styles = StyleSheet.create({
  container:
  {
  		height: 390,
  		justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    	padding: 20,
  },
  firstRow:
  {
  		flex: 1,
  		flexDirection: 'row',
  },
  secondRow:
  {
		flex: 1,
		flexDirection: 'row',
  },
  thirdRow:
  {
  		flex: 1,
  		flexDirection: 'row',
  },
   buttonStart:
  {
    backgroundColor: '#00B16A',
    width: 280,
    padding: 10,
    marginTop: 10,
  },
  button:
  {
    backgroundColor: '#95a5a6',
    width: 70,
    height: 70,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:
  {
    color: '#FFFFFF',
    textAlign:  'center',
    fontSize: 20,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 25,
  },
});

