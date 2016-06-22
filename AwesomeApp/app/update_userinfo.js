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

let app = new Firebase("https://todoappmuneer.firebaseio.com/");

class UpdateInfo extends Component {

// Constructor
constructor(props){
super(props)
this.state = {
  //email : "",
  name : "",
  address_1:"",
  address_2:"",
  mobile:""
  
  

}

}

onUpdatePress(){
//Update Information of curent user
let firbase_baseurl = "https://todoappmuneer.firebaseio.com/"
let username = this.state.name;
let app = new Firebase(firbase_baseurl+username);//new url

app.set({

  address_1 : this.state.address_1,
  address_2: this.state.address_2,
  mobile : this.state.mobile

});

}


  

render() {

 // retrive curent user name from async
    AsyncStorage.getItem("user_name")
    .then(
    (value) => {
    this.setState({name :value})

    }

    )
//************************************//





return (
//

<View style={styles.container}>
<Text>Update User Information</Text>
<TextInput placeholder="Name" onChangeText = {(text) => this.setState({name:text})} value={this.state.name}/>
<TextInput placeholder="Address Line 1 " onChangeText = {(text) => this.setState({address_1:text})} value={this.state.address_1}/>
<TextInput placeholder="Address Line 2 " onChangeText = {(text) => this.setState({address_2:text})} value={this.state.address_2}/>
<TextInput placeholder="Mobile " onChangeText = {(text) => this.setState({mobile:text})} value={this.state.mobile}/>

<Text>{this.state.v1} </Text>
<TouchableHighlight onPress={this.onUpdatePress.bind(this)}><Text>Update</Text></TouchableHighlight>
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
