// Import a library to help create a component
import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import firebase from 'firebase';

// Local Import
import { Header } from './components/Commons';
import LoginForm from './components/LoginForm';
import apikey from './constants/api';

// Create a component
class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apikey,
      authDomain: 'auth-fbc12.firebaseapp.com',
      databaseURL: 'https://auth-fbc12.firebaseio.com',
      projectId: 'auth-fbc12',
      storageBucket: 'auth-fbc12.appspot.com',
      messagingSenderId: '177346767026'
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
