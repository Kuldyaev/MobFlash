import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import Navigator from './src/components/navigator'
import reducer from './src/reducers/mainreducer'

class App extends Component {
  render() {
    return (
      <Provider store= {createStore(reducer)}>  
          <Navigator />
      </Provider> 
    );
  }
}

export default (App);