'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Dimensions,
  AsyncStorage
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Firebase from 'firebase';

let firbase_baseurl = "https://todoappmuneer.firebaseio.com/"
//let app = new Firebase("");




var windowWidth = Dimensions.get('window').width;
class SingUp extends Component {

// Constructor
constructor(props){
super(props)
this.state = {
  name : "",
  lname:"",
  email : "",
  password : "",
  confirmed_password : ""

}

}




onRegister(){
  /*
  let username = this.state.name;
  let app = new Firebase(firbase_baseurl+username);// ref = https://todoappmuneer.firebaseio.com/users/{current user name}
  this.props.navigator.push({name : 'signin'});

  //Set User Name in AsychStorage so updateinfo can identify the user
  AsyncStorage.setItem("user_name",username)


app.set({

  firstname : this.state.name,
  lastname : this.state.lname


});
*/
//console.log("Sign Up")
let app = new Firebase(firbase_baseurl);// ref = https://todoappmuneer.firebaseio.com/users/{current user name}

app.createUser({
  'email':this.state.email,
  'password':this.state.password,

},(error) => {

  if(error)
  {alert(error.code)}
  else{
    alert("Your Account Created Successfully !!")
    this.props.navigator.push(
      {name : 'signin'}
          
      
      );
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
    <TextInput placeholder="Name" onChangeText = {(text) => this.setState({name:text})} value={this.state.name}/>
    <TextInput placeholder="Last Name" onChangeText = {(text) => this.setState({lname:text})} value={this.state.lname}/>
    
    <TouchableHighlight onPress={this.onRegister.bind(this)}><Text>Register</Text></TouchableHighlight>


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
