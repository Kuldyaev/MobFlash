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
               this.props.dispatch(setNotificationStatus(false))   
              }
              else{
                this.props.dispatch(setNotificationStatus(true))  
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
       <Text style={styles.welcome}>Info</Text>
       <Text style={styles.welcome}>{String(this.props.current.note)}</Text> 

        <Switch
          style={{marginTop:30}}
          onValueChange = {this.toggleSwitch}
          value = {this.props.current.note}/>
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