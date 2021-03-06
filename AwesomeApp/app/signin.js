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


let UID123_object = {

  addressUpdated : 'yes'

}


import Firebase from 'firebase';

let app = new Firebase("https://todoappmuneer.firebaseio.com");

class SingIn extends Component {

// Constructor
constructor(props){
super(props)
this.state = {
  email : "",
  password : "",
  uid : "",
  addressUpdated: "test"

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

  //console.log(authData.uid)
  this.setState({uid : authData.uid})
  AsyncStorage.setItem("_uid",authData.uid);
 
  AsyncStorage.setItem('UID123',JSON.stringify(UID123_object))

  AsyncStorage.getItem('UID123',(err,result) => {
  let result_json = JSON.parse(result)
  //console.log(result_json[0].addressUpdated)
  //console.log(result_json)
  console.log(Object.values(result_json))
  var result = Object.values(result_json)
  //this.setState({addressUpdated:result})
  if(result == 'yes')
  {this.props.navigator.push({name : 'landingpage'})}
  //console.log("yes")
  else{
    //console.log("No")
    this.props.navigator.push({name : 'updateinfo'})
  }
})

  
 
  }
}

);
}
 

  onSignUpPress(){

    // NAvigate to sign up
    
    this.props.navigator.push({name : 'signup'});
    //console.log(this.props.navigator)
  }

  componentWillMount(){

    // retrive curent user name from async
    AsyncStorage.getItem("updated_address")
    .then(
    (value) => {
      
    this.setState({"updated_address" : value})
    console.log(this.state.updated_address)
    }

    )
//************************************//

    //this.setState({updated_address:"false"})
  }

  render() {
     
    
    


    return (
      <View style={styles.container}>
      <Text>Sign In</Text>
      <TextInput placeholder="Email" onChangeText = {(text) => this.setState({email:text})} value={this.state.email}/>
      <TextInput placeholder="Password" onChangeText = {(text) => this.setState({password:text})} value={this.state.password}/>
    
      <Text> </Text>
      <TouchableHighlight onPress={this.onSignInPress.bind(this)}><Text>Sign In</Text></TouchableHighlight>
      <Text> First Time User ?</Text>

      <TouchableHighlight onPress={this.onSignUpPress.bind(this)}><Text>Register</Text></TouchableHighlight>


      <Text>{this.state.addressUpdated}</Text>
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
