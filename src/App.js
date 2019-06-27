// Import
import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import firebase from 'firebase';

// Local Import
import { Header, Button, Spinner } from './components/Commons';
import LoginForm from './components/LoginForm';
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
  } from './constants/api.js';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <View style={{ flex: 1 }}>
          <Header headerText={'Home'} />
          <Button onPress={() => firebase.auth().signOut()}>
                Log Out
          </Button>
        </View>
        );

      case false:
        return (
          <View style={{ flex: 1 }}>
            <Header headerText={'Firebase Authentication'} />
            <LoginForm />
          </View>
        );

      default:
        return <Spinner size="large" />
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: '#000000',
            height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
            }}
        >
          <StatusBar
            translucent
            backgroundColor="#212121"
            barStyle="dark-content"
          />
        </View>
        {this.renderContent()}
      </View>
    );
  }
};

export default App;
