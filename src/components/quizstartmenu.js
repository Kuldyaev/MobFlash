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
        <View style={styles.box1}>
            <View style={styles.box}>
                <Text style={styles.welcome}>Quiz name: {this.props.current.deck}</Text>
                <Text style={styles.welcome}>{Object.keys(this.props.questions.decks[this.props.current.deck].questions).length} questions</Text>
            </View>
            <View style={styles.box}>
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
                                        ?  (Math.round((this.props.questions.decks[this.props.current.deck].result)*100/(Object.keys(this.props.questions.decks[this.props.current.deck].questions).length)) + "%")
                                        : " "
                                    }</Text>
                </View>    
            </View>
            <View style={styles.box}/>
 
        </View>    
        <View style={styles.box2}>
            <TouchableOpacity
                style={styles.btn4}
                onPress={() => {
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? this.restart()
                                    : this.props.navigation.navigate('Quiz')
                }}
                underlayColor='#fff'>
                    <Text style={styles.btnText4}>{
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? "Restart Quiz"
                                    : "Start this Quiz "
                                }
                    </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn4}
                onPress={() => {
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? this.props.navigation.navigate('Main')
                                    : this.props.navigation.navigate('AddQuestion')
                   
                    }}
                underlayColor='#fff'>
                    <Text style={styles.btnText4}>{
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? "Back to Deck"
                                    : "Add new question "
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
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  box: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefff0',
  },
  box1: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefff0',
    alignItems: 'stretch',
  },
  box2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f8d452',
    alignItems: 'stretch',
   
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
  },
  btn4: {
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 2,
    color: 'green',
    borderRadius: 5,
    backgroundColor: '#b8860b',
    flex: 1
  },
   btnText4:{
      fontSize: 20,
      color:'#A3C581',
      textAlign:'center',
      paddingTop: 5,
  },
});


function mapStateToProps (state) {
    return { 
       questions: state.questions,
       current: state.current
       
    }
    
}

export default connect( mapStateToProps)(QuizStartMenu);