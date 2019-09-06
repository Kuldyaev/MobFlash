import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Switch} from 'react-native';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions';
import { getNotificationStatus, setLocalNotification } from '../utils/note';
import { setNotificationStatus } from '../actions/current';

const NOTIFICATION_KEY = 'Slavalion:notifications'

class Info extends Component {
                
    componentDidMount() {
        AsyncStorage.getItem(NOTIFICATION_KEY)
            .then(JSON.parse)
            .then((data) => {
              if (data === null) {
               this.props.dispatch(setNotificationStatus(false, 0))   
              }
              else{
                this.props.dispatch(setNotificationStatus(true, String(typeof(data))))  
            }
            })
    } 

    toggleSwitch = (value) => {
        if (value){
            this.props.dispatch(setNotificationStatus(value))
            setLocalNotification()
        }
        else{
            this.props.dispatch(setNotificationStatus(value))
            AsyncStorage.removeItem(NOTIFICATION_KEY)
                .then(Notifications.cancelAllScheduledNotificationsAsync)
        }    
    }
    

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <View style={styles.box3}>
            <Text style={styles.welcome1}>Notification</Text> 
            <Text style={styles.welcome1}>{
                this.props.current.note
                    ? 'on'
                    : 'off'
                }</Text> 
          </View>
          <View style={styles.box4}>
              <Switch
              style={{marginTop:30}}
              onValueChange = {this.toggleSwitch}
              value = {this.props.current.note}/>
          </View>
        </View>
        <View style={styles.box2}>
            <Text style={styles.welcome}>This is "Mobile Flashcards" project in React&Redux course from UDACITY. Here a user answers questions, check his gueses and can recive score in quizes. Creating new quizes also available.</Text> 
            <Text style={styles.welcome}>Enjoy!</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefff0',
    alignItems: 'stretch',
     flexDirection: 'row',
  },
  box2: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefff0',
    alignItems: 'stretch',
   },
   box3: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefff0',
    flexDirection: 'column',
  },
   box4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefff0',
    flexDirection: 'column',
  },
   welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  welcome1: {
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


function mapStateToProps (state) {
    return { 
        questions: state.questions,
        current: state.current
    }
    
}

export default connect( mapStateToProps)(Info);