import React, { Component } from 'react';
import { Platform, StyleSheet, Text, 
            View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {setCurrentDeck} from '../actions/current'



class DecksList extends Component {
  constructor(props){ super(props) }

   
  render() {
     
    return (
    <FlatList
        data={Object.entries(this.props.questions.decks)}
        keyExtractor={(item)=>item[0]}
        renderItem={({item}) => (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {this.props.navigation.navigate('QuizStartMenu')}}
                underlayColor='#fff'>
                    <Text style={styles.btnText}>{item[1].id}</Text>
                    <Text style={styles.btnText}>{Object.keys(item[1].questions).length}</Text>
                    <Text>{Object.keys(this.props)}</Text>
              </TouchableOpacity>                  
        )}
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'stretch',
  },
    box1: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefff0',
  },
    box2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b8860b',
   
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
       current: state.current,
    }
    
}

export default connect( mapStateToProps)(DecksList);