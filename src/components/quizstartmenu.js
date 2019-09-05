import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {setQuizRezult} from '../actions/questions'


class QuizStartMenu extends Component {
    
    restart = () =>{
         alert("Restart delete results score",[{text: "OK"}])
         this.props.dispatch(setQuizRezult(this.props.current.deck, 0, 'no'))
         this.props.navigation.navigate('Quiz')
    }
    
  render() {
      
    return (
      <View style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.welcome}>Quiz name: {this.props.current.deck}</Text>
            <Text style={styles.welcome}>{Object.keys(this.props.questions.decks[this.props.current.deck].questions).length} questions</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.welcome}>{
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? "You already pass this quiz"
                                    : " "
                                }                               
            </Text>
            <Text style={styles.welcome}>{
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? "and your result is "
                                    : " "
                                } 
            </Text>
            <View>
                <Text style={styles.welcome}>{
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? ((this.props.questions.decks[this.props.current.deck].result)*100/(Object.keys(this.props.questions.decks[this.props.current.deck].questions).length))
                                    : " "
                                }</Text>
                <Text style={styles.welcome}>{
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? "% "
                                    : " "
                                } </Text>
            </View>    
        </View>
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? this.restart()
                                    : this.props.navigation.navigate('Quiz')
                }}
                underlayColor='#fff'>
                    <Text style={styles.btnText}>{
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? "Restart Quiz"
                                    : "Start this Quiz "
                                }
                    </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? this.props.navigation.navigate('Main')
                                    : this.props.navigation.navigate('AddQuestion')
                   
                    }}
                underlayColor='#fff'>
                    <Text style={styles.btnText}>{
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? "Back to Deck"
                                    : "Add new question to this Quiz "
                                }
                    </Text>
              </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    btn: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
    color: 'green',
  },
   btnText:{
      color:'green',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }
});


function mapStateToProps (state) {
    return { 
       questions: state.questions,
       current: state.current
       
    }
    
}

export default connect( mapStateToProps)(QuizStartMenu);