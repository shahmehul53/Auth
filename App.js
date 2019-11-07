import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Heading, Button, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAUbGTcSP5YHXyFn3itdKv4fpNNNd-e-OA',
      authDomain: 'authentication-6fc5d.firebaseapp.com',
      databaseURL: 'https://authentication-6fc5d.firebaseio.com',
      projectId: 'authentication-6fc5d',
      storageBucket: 'authentication-6fc5d.appspot.com',
      messagingSenderId: '1062133715049',
      appId: '1:1062133715049:web:5b5ef53fcced79559a52f8',
      measurementId: 'G-FRYEMYWD0Y',
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Heading headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
