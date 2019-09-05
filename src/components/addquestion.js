import React, { Component } from 'react';
import { Platform, StyleSheet, Text, 
KeyboardAvoidingView, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {addNewQuestion} from '../actions/questions'


class AddQuestion extends Component {
    state = {
        question: "Type here new question",
        answer: "Type here answer",
    }
  
    handleTextChangeQ = (input) => {
      this.setState({
        question: input,
 
      })
  }
    handleTextChangeA = (input) => {
      this.setState({
        answer: input,      
      })
  }

  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.welcome}>Add Question</Text>
        <Text style={styles.welcome}>{this.state.question}</Text>
        <TextInput
            value= {this.state.question}
            style={styles.input}
            onChangeText={this.handleTextChangeQ}
            placeholder= "Type here new question "
            selectTextOnFocus
        />
        <TextInput
            value= {this.state.answer}
            style={styles.input}
            onChangeText={this.handleTextChangeA}
            placeholder= "Type here answer "
            selectTextOnFocus
        />
        <Button
          title="Create New Question"
          onPress={()=>{
            if(Object.keys(this.props.questions.decks[this.props.current.deck].questions).includes(this.state.question)){
                    alert(
                    "This question already exist",
                    [{text: "OK"}]
                    )  
            }
            else{
              if(this.state.question==="Type here new question"){
                    alert(
                    "You schould create new question",
                    [{text: "OK"}]  
                   ) 
              }   
              else{ 
                if(this.state.answer==="Type here answer"){
                    alert(
                    "You schould create new answer",
                    [{text: "OK"}]  
                   )      
                }
                else{
              this.props.dispatch(addNewQuestion(this.props.current.deck,
                                                {[this.state.question]: {Qtext: this.state.question, 
                                                                         Atext: this.state.answer,
                                                }}))
                this.props.navigation.navigate('QuizStartMenu')
                } 
              }
            }
              
              
              
              
          }}
        />
      </KeyboardAvoidingView>
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
  input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 200,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


function mapStateToProps (state) {
    return { 
       questions: state.questions, 
       current: state.current,
    }
    
}

export default connect( mapStateToProps)(AddQuestion);