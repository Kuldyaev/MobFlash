import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';



class QuizStartMenu extends Component {
    
  render() {
      
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Theme: {this.props.current.deck}</Text>
        <Text style={styles.welcome}>{Object.keys(this.props.questions.decks[this.props.current.deck].questions).length} questions</Text>
        <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Quiz')}
            underlayColor='#fff'>
                <Text style={styles.btnText}>Start this Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('AddQuestion')}
            underlayColor='#fff'>
                <Text style={styles.btnText}>Add new question to this Quiz</Text>
          </TouchableOpacity>

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
       current: state.current
       
    }
    
}

export default connect( mapStateToProps)(QuizStartMenu);