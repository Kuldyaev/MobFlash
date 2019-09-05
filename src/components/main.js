import React, { Component } from 'react';
import { Platform, StyleSheet, Text, 
        View, FlatList, TouchableOpacity,
        Animated} from 'react-native';
import { connect } from 'react-redux';
import {setCurrentDeck} from '../actions/current'



class Main extends Component {
    state = {
        opacity: new Animated.Value(0.7),
        fontSize: new Animated.Value(10),
        
    }
    
componentDidMount() {
    const { opacity, fontSize } = this.state 
       Animated.timing(opacity, { toValue: 1, duration: 1000}).start()
       Animated.timing(fontSize, { toValue: 30, duration: 1500}).start()
    }
    
  render() {
    const { opacity, fontSize } = this.state   
    return (
    <View style={styles.container}>
       <Animated.View style={[styles.box1, {opacity}]}>
       <FlatList
            data={Object.entries(this.props.questions.decks)}
            keyExtractor={(item)=>item[0]}
            renderItem={({item}) => (
             
             <TouchableOpacity
                style={styles.btn3}
                onPress={() => {
                    this.props.navigation.navigate('QuizStartMenu')
                    this.props.dispatch(setCurrentDeck(item[0]))
                }}
                underlayColor='#fff'>
                    <Text style={styles.btnText0}>{item[1].id}</Text>
                    <Text style={styles.btnText}>{Object.keys(item[1].questions).length} questions</Text>
              </TouchableOpacity>                  
        )}
    />
        </Animated.View>
        <View style={styles.box2}>
          <TouchableOpacity
            style={styles.btn4}
            onPress={() => this.props.navigation.navigate('Info')}
            underlayColor='#fff'>
                <Animated.Text style={[styles.btnText4, {fontSize}]}>Info</Animated.Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn4}
            onPress={() => this.props.navigation.navigate('AddDeck')}
            underlayColor='#fff'>
                <Animated.Text style={[styles.btnText4, {fontSize}]}>AddDeck</Animated.Text>
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
   btnText0:{
      color:'green',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10,
      fontSize: 50,
  },
   btn3: {
    height: 100,   
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    margin: 2,
    color: 'green',
    borderRadius: 5,
    backgroundColor: '#A3C581',
    
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
      fontSize: 30,
      color:'#A3C581',
      textAlign:'center',
      paddingTop: 5,
  },
});


function mapStateToProps (state) {
    return { 
       questions: state.questions,
       current: state.current,
    }
    
}

export default connect( mapStateToProps)(Main);