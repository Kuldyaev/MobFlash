import React, { Component } from 'react';
import { Platform, StyleSheet, Text, 
KeyboardAvoidingView, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {addNewDeck} from '../actions/questions'


class AddDeck extends Component {
    state = {
        input: "New deck title here",
    }
  
  handleTextChange = (input) => {
      this.setState({
        input  
      })
  }

  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.welcome}>AddDeck</Text>
        <TextInput
            value= {this.state.input}
            style={styles.input}
            onChangeText={this.handleTextChange}
            placeholder= "Type here New deck title "
            selectTextOnFocus
        />
        <Button
          title="Create New Deck"
          onPress={()=>{
              if(Object.keys(this.props.questions.decks).includes(String(this.state.input))){
                alert(
                "Deck with this title already exist",
                [{text: "OK"}]
                )  
              }
              else{              
              this.props.dispatch(addNewDeck({[this.state.input]: {id: this.state.input, 
                                                                    passed: 'no',
                                                                    questions: {},
                                                }}))
              this.props.navigation.navigate('Main')
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
       questions: state.questions
    }
    
}

export default connect( mapStateToProps)(AddDeck);