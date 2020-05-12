import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Greeting from './Greeting';

export default class GreetingCall extends Component {
    state = {
        names : ['ryan', 'aishah']
    }

    render() {
        return (       

          <View>
              
              {this.state.names.map(function(name, index){
                return <Greeting name={name}></Greeting>
              })}

          </View>
        )
      }
}