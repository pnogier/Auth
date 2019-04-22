import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner} from './Commons';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess())
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess())
          .catch(this.onLoginFail.bind(this));
      });
  };

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    });
  };

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  };

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            placeholder={'Email'}
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder={'Password'}
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  };
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
