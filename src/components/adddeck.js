import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import {addNewDeck} from '../actions/questions'


class AddDeck extends Component {
  
  render() {
      
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>AddDeck</Text>
        <Text style={Object.keys(this.props)}>AddDeck</Text>
        
        <Button
          title="Back to Home page"
          onPress={()=>{
              this.props.dispatch(addNewDeck({["Vasya"]: {id: "Vasya", number: 10}}))
              this.props.navigation.navigate('Main')
          }}
        />
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
});


function mapStateToProps (state) {
    return { 
       questions: state.questions
    }
    
}

export default connect( mapStateToProps)(AddDeck);