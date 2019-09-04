import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Main from './main'
import Info from './info'
import InfoMenu from './infomenu'
import QuizStartMenu from './quizstartmenu'
import Quiz from './quiz'
import AddDeck from './adddeck'

const Navigator = createStackNavigator({
  Main: {
        screen: Main,
        navigationOptions: {
          title: 'Home',
          headerTintColor: '#FFD700',
          headerStyle: {backgroundColor: 'green'}
        },
    }, 
  Info: {
        screen: Info,
        navigationOptions: {
          title: 'Info',
          headerTintColor: '#FFD700',
          headerStyle: {backgroundColor: 'green'}
        },
    }, 
  QuizStartMenu: {
        screen: QuizStartMenu,
        navigationOptions: {
          title: 'Start Line',
          headerTintColor: '#FFD700',
          headerStyle: {backgroundColor: 'green'}
        },
    }, 
   Quiz: {
        screen: Quiz,
        navigationOptions: {
          title: 'Quiz',
          headerTintColor: '#00694b',
          headerStyle: {backgroundColor: '#fafcac'}
        },
    }, 
   AddDeck: {
        screen: AddDeck,
        navigationOptions: {
          title: 'Create Deck Page',
          headerTintColor: '#00694b',
          headerStyle: {backgroundColor: '#fafcac'}
        },
    },   
}, {
    initialRouteName: 'Main',
});

export default createAppContainer(Navigator);