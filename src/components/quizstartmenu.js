import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, 
        TouchableOpacity, Animated  } from 'react-native';
import { connect } from 'react-redux';
import {setQuizRezult} from '../actions/questions'


class QuizStartMenu extends Component {
    state = {
        opacity: new Animated.Value(0),
        fontSize: new Animated.Value(10),
        
    }
    
   componentDidMount() {
    const { opacity, fontSize } = this.state 
       Animated.timing(opacity, { toValue: 1, duration: 1500}).start()
       Animated.timing(fontSize, { toValue: 20, duration: 1500}).start()
    }
    
    restart = () =>{
         alert("Restart delete results score",[{text: "OK"}])
         this.props.dispatch(setQuizRezult(this.props.current.deck, 0, 'no'))
         this.props.navigation.navigate('Quiz')
    }
    
    animation = () =>{
       const { opacity, fontSize } = this.state 
       
       Animated.timing(opacity, { toValue: 0, duration: 500}).start()
       Animated.timing(fontSize, { toValue: 65, duration: 500}).start()
       this.props.navigation.navigate('QuizStartMenu')
     }
    
  render() {
    const { opacity, fontSize } = this.state   
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box1, {opacity}]}>
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
        </Animated.View>    
        <View style={styles.box2}>
            <TouchableOpacity
                style={styles.btn4}
                onPress={() => {
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? this.restart()
                                    : this.props.navigation.navigate('Quiz')
                }}
                underlayColor='#fff'>
                    <Animated.Text style={[styles.btnText4, {fontSize}]}>{
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? "Restart Quiz"
                                    : "Start this Quiz "
                                }
                    </Animated.Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn4}
                onPress={() => {
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? this.props.navigation.navigate('Main')
                                    : this.props.navigation.navigate('AddQuestion')
                   
                    }}
                underlayColor='#fff'>
                    <Animated.Text style={[styles.btnText4, {fontSize}]}>{
                                this.props.questions.decks[this.props.current.deck].passed === 'yes'
                                    ? "Back to Deck"
                                    : "Add new question "
                                }
                    </Animated.Text>
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