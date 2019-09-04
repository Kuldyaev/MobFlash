import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';



class Quiz extends Component {
    state = {
        currentQuestion: 0,
        quiz: {id: "Empty",
               passed: 'no',
                questions: {},}
    }
        
    componentDidMount () {
    const { questions } = this.props
    this.setState({quiz: questions.decks[this.props.current.deck]})
    }

    

   render(){
       if((1+this.state.currentQuestion) < Object.keys(this.state.quiz.questions).length)
          {  const idx = Object.keys(this.state.quiz.questions)[this.state.currentQuestion]
                return (
                  <View style={styles.container}>
                    <Text style={styles.welcome}>Идекс текущего вопроса{this.state.currentQuestion}</Text>
                    <Text style={styles.welcome}>название текущего опроса{this.state.quiz.id}</Text>
                    <Text style={styles.welcome}>Количество вопросов{Object.keys(this.state.quiz.questions).length}</Text>
                    <Text style={styles.welcome}>Текущий вопрос {this.state.quiz.questions[Object.keys(this.state.quiz.questions)[this.state.currentQuestion]].Qtext}</Text>
                    <Text style={styles.welcome}>Текущий ответ {this.state.quiz.questions[Object.keys(this.state.quiz.questions)[this.state.currentQuestion]].Atext}</Text>
                    <View key={this.state.currentQuestion+1}>
                        <Button
                            key= {this.state.currentQuestion+10} 
                            title= "CORRECT" 
                            onPress={() => {
                                this.setState({currentQuestion: this.state.currentQuestion+1,
                                    
                            })}}
                            style={styles.btn}
                        />
                        <Button
                                        key= {this.state.currentQuestion+5}
                                        title= "FALSE"
                                        onPress={() => {
                                            this.setState({currentQuestion: this.state.currentQuestion+1})
        //                                   this.props.navigation.navigate('Main')
                                           }}
                                        style={styles.btn}
                        />
                    </View>
               </View>
          )}
          else { return (
                  <View style={styles.container}>
                    <Text style={styles.welcome}>{this.state.currentQuestion}</Text>
                    <Text style={styles.welcome}>{this.state.quiz.id}</Text>
                    <Text style={styles.welcome}>{Object.keys(this.state.quiz.questions).length}</Text>
                    <Text style={styles.welcome}>Questions</Text>
                    <View key={this.state.currentQuestion+1}>
                        <Button
                                        key= {this.state.currentQuestion+10} 
                                        title= "CORRECT" 
                                        onPress={() => {
                                           this.setState({currentQuestion: this.state.currentQuestion+1}) 
                                           this.props.navigation.navigate('Main')
                                           }}
                                        style={styles.btn}
                        />
                        <Button
                                        key= {this.state.currentQuestion+5}
                                        title= "FALSE"
                                        onPress={() => {
                                           this.setState({currentQuestion: this.state.currentQuestion+1})
                                           this.props.navigation.navigate('Main')
                                           }}
                                        style={styles.btn}
                        />
                    </View>
                    
               </View>
          ) }
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