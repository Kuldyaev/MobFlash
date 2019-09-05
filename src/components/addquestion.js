import React, { Component } from 'react';
import { Platform, StyleSheet, Text, 
        KeyboardAvoidingView, TouchableOpacity,
        TextInput, View } from 'react-native';
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
        <View style={styles.box}>
            <Text style={styles.welcome}>Add Question form</Text>
            <Text style={styles.welcome}>for {this.props.current.deck} quiz</Text>
        </View>
        <View style={styles.box}>
            <TextInput
                value= {this.state.question}
                style={styles.input}
                onChangeText={this.handleTextChangeQ}
                placeholder= "Type here new question "
                selectTextOnFocus
            />
        </View>  
        <View style={styles.box}>    
            <TextInput
                value= {this.state.answer}
                style={styles.input}
                onChangeText={this.handleTextChangeA}
                placeholder= "Type here answer "
                selectTextOnFocus
            />
        </View>
       
        <View style={styles.box}>
            <TouchableOpacity
              style={styles.btn}
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
            underlayColor='#fff'>
                  <Text style={styles.btnText}>Create New Question</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.box}/>
        <View style={styles.box}/>
      </KeyboardAvoidingView>
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
  input: {
    height: 30,
    width: 330,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    marginLeft: 20,
  }, 
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  btn: {
    flex: 1,  
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
    color: '#fefff0',
    backgroundColor: 'green',
    borderRadius: 10,
    width: 300,
    height: 70,
  },
  btnText:{
    color:'#ffd700',
    textAlign:'center',
    fontSize: 30,
  },  
});


function mapStateToProps (state) {
    return { 
       questions: state.questions, 
       current: state.current,
    }
    
}

export default connect( mapStateToProps)(AddQuestion);