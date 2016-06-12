'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Firebase from 'firebase';

let app = new Firebase("https://todoappmuneer.firebaseio.com");




var windowWidth = Dimensions.get('window').width;
class SingUp extends Component {

// Constructor
constructor(props){
super(props)
this.state = {
  name : "",
  email : "",
  password : "",
  confirmed_password : ""

}

}


onGobackPress(){

  this.props.navigator.push({name : 'signin'});
}

onRegister(){

//console.log("Sign Up")
app.createUser({
  'email':this.state.email,
  'password':this.state.password,

},(error) => {

  if(error)
  {alert(error.code)}
  else{
    alert("Your Account Created Successfully !!")
    this.props.navigator.push({name : 'updateinfo'});
  }
}

);
}
  render() {
    return (


    <KeyboardAwareScrollView>
    <View style={styles.center}>
    <Text>Urban Services</Text>
    <TextInput placeholder="Email" onChangeText = {(text) => this.setState({email:text})} value={this.state.email}/>
    <TextInput placeholder="Password" onChangeText = {(text) => this.setState({password:text})} value={this.state.password}/>
    <TouchableHighlight onPress={this.onRegister.bind(this)}><Text>Sign UP</Text></TouchableHighlight>


    </View>
    </KeyboardAwareScrollView>
        
        
      
    );
  }
}

const styles = StyleSheet.create({
  center : {

    justifyContent:'center',
    alignItems:'center',
    marginTop : 100,
    marginLeft:20,
    marginRight:20,

  },
  
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
  }
});

export default SingUp
