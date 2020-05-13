import * as React from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import GreetingCall from './components/GrettingCall';
import { ScrollView } from 'react-native-gesture-handler';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>

      <GreetingCall ></GreetingCall>


      {/* <Greeting name="Ryan"></Greeting>
      <Greeting name="Aishah"></Greeting>
      <Greeting name="Harry"></Greeting> */}

      </ScrollView>
    </SafeAreaView>
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
  scroll:{
    marginTop: 55
  }
});
