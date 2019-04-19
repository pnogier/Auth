import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './Commons';

class LoginForm extends Component {
  state = { email: '', password: '' };

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
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  };
};

export default LoginForm;
