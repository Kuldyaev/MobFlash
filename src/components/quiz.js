import React, { Component } from 'react';
import { Platform, StyleSheet, Text,
        View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {setQuizRezult} from '../actions/questions'
import { clearLocalNotification, setLocalNotification } from '../utils/note';



class Quiz extends Component {
    state = {
        currentQuestion: 0,
        quiz: {id: "Empty",
               passed: 'no',
                questions: {},
                },
        show: false,
    };
        
    componentDidMount () {
    const { questions } = this.props
    this.setState({
        currentQuestion: 0,
        quiz: questions.decks[this.props.current.deck],
        result: 0,
        })
    };



   

   render(){
       const { questions } = this.props
       const idx = Object.keys(this.state.quiz.questions)[this.state.currentQuestion]
       const q = this.props.questions.decks[this.props.current.deck]
       
       const     Dashboard = () => (
                    <View style={styles.box1}>
                        <Text style={styles.welcome}>{this.state.quiz.id}</Text>
                        <Text style={styles.welcome}>{this.state.currentQuestion+1} question of {Object.keys(this.state.quiz.questions).length}</Text>
                    </View>
        );
        const     QuestionText = () => (
                    <View style={styles.box}>
                        <Text style={styles.welcome}>Question: </Text>
                        <Text style={styles.welcome1}>{Object.values(q.questions)[this.state.currentQuestion].Qtext} </Text>
                    </View>
        );
        
        const     AnswerText = () => (
                        <View style={styles.box}>
                            <Text style={styles.welcome}>Answer: </Text>
                            <Text style={styles.welcome1}>{
                                this.state.show
                                    ? Object.values(q.questions)[this.state.currentQuestion].Atext
                                    : " "
                                } </Text>
                        </View>
                );
        
        const     ShowAnswerText = () => (
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {if(this.state.show === false){this.setState({ show: true})}}}
                        underlayColor='#fff'>
                               <Text style={styles.btnText}>SHOW ANSWER</Text>
                   </TouchableOpacity>
        );
        
        
       
        const  Buttons = () =>  (
                  <View style={styles.box2}>
                        <TouchableOpacity
                            style={styles.btn4}
                             onPress={() => {
                                if(this.state.currentQuestion < (Object.keys(this.state.quiz.questions).length - 1)){
                                this.setState({ currentQuestion: this.state.currentQuestion+1,
                                                result: this.state.result+1,
                                                show: false})
                                }
                                else{
                                    this.props.dispatch(setQuizRezult(this.props.current.deck, (this.state.result+1), 'yes'))
                                    this.props.navigation.navigate('QuizStartMenu')
                                    clearLocalNotification().then(setLocalNotification)    
                                }
                            }}
                            underlayColor='#fff'>
                                <Text style={styles.btnText4}>CORRECT</Text>
                        </TouchableOpacity>
                         <TouchableOpacity
                            style={styles.btn4}
                            onPress={() => {
                                if(this.state.currentQuestion < (Object.keys(this.state.quiz.questions).length - 1)){
                                this.setState({ currentQuestion: this.state.currentQuestion+1,
                                                show: false})
                                }
                                else{
                                    this.props.dispatch(setQuizRezult(this.props.current.deck, this.state.result, 'yes'))
                                    this.props.navigation.navigate('QuizStartMenu')
                                    this.clearLocalNotification().then(setLocalNotification)
                                }
                            }}
                            underlayColor='#fff'>
                                <Text style={styles.btnText5}>FALSE</Text>
                        </TouchableOpacity>
                </View>
          );

       
        return(
            <View style={styles.container}>
                <Dashboard/>
                <QuestionText/>
                <AnswerText/>
                <ShowAnswerText/>
                <Buttons/>
            </View>
        )  
          
          
          
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefff0',
    alignItems: 'stretch',
  },
  box2: {
    flex: 2,
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
  welcome1: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  btn: {
    flex: 1,  
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
    color: '#fefff0',
    backgroundColor: 'green',
    borderRadius: 10,
    width: 370,
    height: 70,
  },
  btnText:{
    color:'#ffd700',
    textAlign:'center',
    fontSize: 30,
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
      color:'green',
      textAlign:'center',
      paddingTop: 50,
  },
   btnText5:{
      fontSize: 30,
      color:'red',
      textAlign:'center',
      paddingTop: 50,
      fontWeight: 'bold',
  },
});


function mapStateToProps (state) {
    return { 
       questions: state.questions,
       current: state.current
    }
    
}

export default connect( mapStateToProps)(Quiz);