import React, { Component } from 'react';
import { Platform, StyleSheet, Text, 
        KeyboardAvoidingView, View, TextInput, 
        TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {addNewDeck} from '../actions/questions'


class AddDeck extends Component {
    state = {
        input: "Type new deck title here",
    }
  
  handleTextChange = (input) => {
      this.setState({
        input  
      })
  }

  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.box} />
        <View style={styles.box1}>
            <TextInput
                value= {this.state.input}
                style={styles.input}
                onChangeText={this.handleTextChange}
                placeholder= "Type here New deck title "
                selectTextOnFocus
            />
        </View> 
        <View style={styles.box} />
        <View style={styles.box}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  if(Object.keys(this.props.questions.decks).includes(String(this.state.input))){
                    alert(
                    "Deck with this title already exist",
                    [{text: "OK"}]
                    )  
                  }
                  else{
                      if (this.state.input === "Type new deck title here"){
                                alert(
                                "You schould create new deck title",
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
                  
                }}}
                underlayColor='#fff'>
                    <Text style={styles.btnText}>Create New Deck</Text>
            </TouchableOpacity>
        </View>    
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fefff0',
  },
  box: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefff0',
  },
  box1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
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
    fontSize: 40,
  },  

});


function mapStateToProps (state) {
    return { 
       questions: state.questions
    }
    
}

export default connect( mapStateToProps)(AddDeck);