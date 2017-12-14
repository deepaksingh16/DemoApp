import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Video
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import Screen1 from "./Screen1"
import Dashboard from "./Dashboard"
import Profile from "./Profile"
import Repositories from "./Repositories"

const App = StackNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      headerTitle: 'Welcome'
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerTitle: 'Dashboard'
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile'
    }
  },
  Repositories: {
    screen: Repositories,
    navigationOptions: {
      headerTitle: "Repositories"
    }
  }
})

export default App;
