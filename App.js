import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { setLocalNotification } from './src/utils/note'

import Navigator from './src/components/navigator'
import reducer from './src/reducers/mainreducer'


class App extends Component {
  componentDidMount(){
     setLocalNotification()
  }
  render() {
    return (
      <Provider store= {createStore(reducer)}>  
          <Navigator />
      </Provider> 
    );
  }
}

export default (App);