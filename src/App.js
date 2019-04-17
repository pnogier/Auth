// Import a library to help create a component
import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import Header from './components/Header';

// Create a component
const App = () => (
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
      <Header headerText={'Firebase Authentification'} />
    </View>
  </View>
);

export default App;
