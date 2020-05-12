import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import GreetingCall from './components/GrettingCall';
import Greeting from './components/Greeting';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});


 var names = ['ryan', 'aishah', 'harry']

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      {/* <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text> */}

      <GreetingCall></GreetingCall>


      {/* <Greeting name="Ryan"></Greeting>
      <Greeting name="Aishah"></Greeting>
      <Greeting name="Harry"></Greeting> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
