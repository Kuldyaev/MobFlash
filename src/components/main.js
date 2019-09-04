import React, { Component } from 'react';
import { Platform, StyleSheet, Text, 
            View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {setCurrentDeck} from '../actions/current'



class Main extends Component {
    state = {
        deck: 'main',
    }

    
  render() {
      
    return (
    <View style={styles.container}>
       <View style={styles.box1}>
       <FlatList
            data={Object.entries(this.props.questions.decks)}
            keyExtractor={(item)=>item[0]}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.btn3}
                onPress={() => {
                    this.props.dispatch(setCurrentDeck(item[0]))
                    this.props.navigation.navigate('QuizStartMenu')}}
                underlayColor='#fff'>
                    <Text style={styles.btnText}>{item[1].id}</Text>
                    <Text style={styles.btnText}>{Object.keys(item[1].questions).length} questions</Text>
              </TouchableOpacity>                  
        )}
    />
        </View>
        <View style={styles.box2}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Info')}
            underlayColor='#fff'>
                <Text style={styles.btnText}>Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('AddDeck')}
            underlayColor='#fff'>
                <Text style={styles.btnText}>AddDeck</Text>
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
  },
   btn3: {
    height: 50,   
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
    color: 'green',
  },
});


function mapStateToProps (state) {
    return { 
       questions: state.questions,
       current: state.current,
    }
    
}

export default connect( mapStateToProps)(Main);