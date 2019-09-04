import React, { Component } from 'react';
import { Platform, StyleSheet, Text,
        View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';


class Quiz extends Component {
    state = {
        currentQuestion: 0,
        quiz: {id: "Empty",
               passed: 'no',
                questions: {},
                },
        show :'false'
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
                    <View style={styles.container}>
                        <Text style={styles.welcome}>{this.state.quiz.id}</Text>
                        <Text style={styles.welcome}>{this.state.currentQuestion+1} question of {Object.keys(this.state.quiz.questions).length}</Text>
                        
                        <Text style={styles.welcome}>{this.state.result}</Text>
                        <Text style={styles.welcome}>{this.state.show}</Text>
                        
                    </View>
        );
        const     QuestionText = () => (
                    <View style={styles.container}>
                        <Text style={styles.welcome}>Question: </Text>
                        <Text style={styles.welcome}>{Object.values(q.questions)[this.state.currentQuestion].Qtext} </Text>
                    </View>
        );
        
        const     AnswerText = () => (
                    <View style={styles.container}>
                        <Text style={styles.welcome}>Answer: </Text>
                        <Text style={styles.welcome}>{Object.values(q.questions)[this.state.currentQuestion].Atext} </Text>
                    </View>
        );
        
        const     ShowAnswerText = () => (
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {if(this.state.show === 'false'){this.setState({ show: 'true'})}}}
                        underlayColor='#fff'>
                               <Text style={styles.btnText}>SHOW ANSWER</Text>
                   </TouchableOpacity>
        );
        
        
       
        const  Buttons = () =>  (
                  <View style={styles.container}>
                         <Button
                            key= {this.state.currentQuestion+10} 
                            title= "CORRECT" 
                            onPress={() => {
                                if(this.state.currentQuestion < (Object.keys(this.state.quiz.questions).length - 1)){
                                this.setState({ currentQuestion: this.state.currentQuestion+1,
                                                result: this.state.result+1,
                                                show: 'false'})
                                }
                                else{
                                    this.props.navigation.navigate('Info')
                                }
                            }}
                            style={styles.btn}
                        />
                        <Button
                            key= {this.state.currentQuestion+5}
                            title= "FALSE"
                            onPress={() => {
                                if(this.state.currentQuestion < (Object.keys(this.state.quiz.questions).length - 1)){
                                this.setState({ currentQuestion: this.state.currentQuestion+1,
                                                show: 'false'})
                                }
                                else{
                                    this.props.navigation.navigate('Info')
                                }
                            }}
                            style={styles.btn}
                        />
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  },
});


function mapStateToProps (state) {
    return { 
       questions: state.questions,
       current: state.current
    }
    
}

export default connect( mapStateToProps)(Quiz);