
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';



// var car = {
//     name: "",
//     color: ""
// }
var dict = [];

class carClass{
    name =  ""
    color = ""
}

export default class objects extends Component{
    
    constructor(props){
        super(props);
        this.state= {
            
        }

    }

    addToMap = () => {
      

        var mycars = [['volvo', 'red'], ['mercedes', 'green'], ['ford', 'blue']]

        for(var i = 0; i < mycars.length; i++){
            var car = mycars[i];

            
            let newcar = new carClass();
            newcar.name = car[0];
            newcar.color = car[1]
            
            dict.push(newcar);
        }
        // let newcar = new carClass();

        // newcar.name = "volvo";
        // newcar.color = "red";

        // dict.push(newcar);
        //myMap.addToMap(newcar);

        console.log(dict);
    }

   
    render(){
        return(
            <View>
            <Text>HELLO THERE</Text>
            <Button title="NEW CAR" onPress={this.addToMap}></Button>
            </View>
        );
    }

}