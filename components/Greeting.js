import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';


/*
    FUNCTIONS - READ ONLY
    PROPS - Can be passed in and named anything for the attributes
*/

export default function Greeting(props) {
  return (
   <View style={styles.container}>
       <Text>Hello {props.name}</Text>
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
 
});
