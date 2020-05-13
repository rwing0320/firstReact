import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  TextInput,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Greeting from "./Greeting";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class GreetingCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: ["ryan", "aishah"],
      header: ["Name"],
      content: true,
      newName: "",
      errorMessage: "",
    };

    this.updateNewUsername = this.updateNewUsername.bind(this);
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.renderNewTableItems = this.renderNewTableItems.bind(this);
  }

  addUser = () => {
    console.log("IN ADD USER FUNCTION");

    var newName = this.state.newName.toLowerCase();

    if (newName == "" || newName == null) {
      this.setState({ errorMessage: "Please enter something!" });
    } else {
      var isFound = false;

      var oldNames = this.state.names;

      // oldNames = oldNames.map(element => {
      //   element.toLowerCase();
      // })

      console.log("OLD NAMES: " + oldNames);

      for (var i = 0; i < oldNames.length; i++) {
        if (newName == oldNames[i]) {
          isFound = true;
          this.setState({
            errorMessage: "This user has already been added!",
            newName: "",
          });
        }
      }

      if (isFound == false) {
        var users = oldNames.concat(newName);
        this.setState({ names: users, newName: "", errorMessage: "" });

        console.log("ADDED NEW USER, NEW ARRAY: " + users);
      }
    }
  };

  deleteUser = () => {
    console.log("IN DELETE USER FUNCTION");

    var newName = this.state.newName.toLowerCase();

    if (newName == "" || newName == null) {
      this.setState({ errorMessage: "PLease enter something!" });
    } else {
      var isFound = false;
      var foundPosition;

      var oldNames = this.state.names;

      oldNames.map((element) => {
        element.toLowerCase();
      });

      var index = oldNames.indexOf(newName);

      if (index > -1) {
        console.log("FOUND NAME AND DELETING");

        delete oldNames[index];
        var newArray = oldNames;

        console.log("THE NEW ARRAY AFTER DELETION: " + newArray);

        this.setState({ names: newArray, newName: "", errorMessage: "" });
        console.log("NEW ARRAY: " + this.state.names);
      } else {
        this.setState({
          newName: "",
          errorMessage: "No user was found to delete!",
        });
      }

      console.log(this.state.names);
    }
  };

  updateNewUsername = (newName) => {
    this.setState({ newName });
  };

  renderNewTableItems = () => {
    console.log(this.state.names)
    return this.state.names.map((name,index) => {
        console.log(name + " " + index)

        return(
          <Cell data={name != null ? name : ""}></Cell>
        )
      

    
    })
  }

  render() {
    return (
      <View>
                  
          {
             this.state.names != null  ? this.state.names.map(function (name, index) {

                return <Greeting style={styles.instructions}name={name} key={name}></Greeting>;
              }) : ""
            
          
          }

          {/* {
             this.state.names != null  ? 
             
              <Table>
                  {this.renderNewTableItems()}
              </Table>
              
             
              : ""            
          
          } */}

     
        <TextInput
          placeholder="Your name"
          maxLength={20}
          onBlur={Keyboard.dismiss}
          value={this.state.newName}
          onChangeText={this.updateNewUsername}
        />

        <Button onPress={this.addUser} title="Add User" />

        <Button onPress={this.deleteUser} title="Delete User" />

        <Text>{this.state.errorMessage}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
