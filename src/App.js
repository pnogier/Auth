// Import a library to help create a component
import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import firebase from 'firebase';

// Local Import
import { Header } from './components/Commons';
import LoginForm from './components/LoginForm';
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
  } from './constants/api.js';

// Create a component
class App extends Component {
  componentWillMount() {
    console.log(apiKey);
    firebase.initializeApp({
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: '#F8F8F8',
            height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
            }}
        >
          <StatusBar
            translucent
            backgroundColor="#F8F8F8"
            barStyle="dark-content"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Header headerText={'Firebase Authentication'} />
          <LoginForm />
        </View>
      </View>
    );
  }
};

export default App;
