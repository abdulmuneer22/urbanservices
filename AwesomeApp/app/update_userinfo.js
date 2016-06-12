'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  BackAndroid,
  AsyncStorage
} from 'react-native';

import Firebase from 'firebase';

let app = new Firebase("https://todoappmuneer.firebaseio.com");

class UpdateInfo extends Component {

// Constructor
constructor(props){
super(props)
this.state = {
  email : "",
  password : "",
  

}

}


 // Custom methods

 

  

render() {
return (


<View style={styles.container}>
<Text>Update User Information</Text>
<TextInput placeholder="Name" onChangeText = {(text) => this.setState({name:text})} value={this.state.name}/>
<TextInput placeholder="Address Line 1 " onChangeText = {(text) => this.setState({address_1:text})} value={this.state.address_1}/>
<TextInput placeholder="Address Line 2 " onChangeText = {(text) => this.setState({address_2:text})} value={this.state.address_2}/>
<TextInput placeholder="Mobile " onChangeText = {(text) => this.setState({mobile:text})} value={this.state.mobile}/>

<Text> </Text>
<TouchableHighlight><Text>Update</Text></TouchableHighlight>
</View>




);
}
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

export default UpdateInfo
