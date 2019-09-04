import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,  Button } from 'react-native';
import { connect } from 'react-redux';



class Info extends Component {
    state = {
        deck: 'main',
    }
    
  render() {

      
    return (
      <View style={styles.container}>
       <Text style={styles.welcome}>Info</Text>
       <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Main')}
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

export default connect( mapStateToProps)(Info);