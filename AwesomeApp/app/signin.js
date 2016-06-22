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

class SingIn extends Component {

// Constructor
constructor(props){
super(props)
this.state = {
  email : "",
  password : "",
  

}

}

onSignInPress(){

//console.log("Sign Up")
app.authWithPassword({

  'email':this.state.email,
  'password':this.state.password,

},(error,authData) => {
  if(error){
    alert(error.code)
  }else{

  //console.log(authData.uid.password.email)

  AsyncStorage.setItem(authData, JSON.stringify(authData));
   

  this.props.navigator.push({name : 'account'});

  }
}

);
}
 

  onSignUpPress(){

    // NAvigate to sign up

    this.props.navigator.push({name : 'signup'});
    //console.log(this.props.navigator)
  }

  

  render() {
    return (


      <View style={styles.container}>
      <Text>Sign In</Text>
      <TextInput placeholder="Email" onChangeText = {(text) => this.setState({email:text})} value={this.state.email}/>
      <TextInput placeholder="Password" onChangeText = {(text) => this.setState({password:text})} value={this.state.password}/>
    
      <Text> </Text>
      <TouchableHighlight onPress={this.onSignInPress.bind(this)}><Text>Sign In</Text></TouchableHighlight>
      <Text> </Text>
      <TouchableHighlight onPress={this.onSignUpPress.bind(this)}><Text>Register</Text></TouchableHighlight>
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

export default SingIn
