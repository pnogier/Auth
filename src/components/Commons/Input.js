import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 18,
    lineHeight: 22,
    height: 40,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    justifyContent: 'center',
    }  
};

export { Input };