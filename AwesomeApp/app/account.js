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

let app = new Firebase("https://todoappmuneer.firebaseio.com");




var windowWidth = Dimensions.get('window').width;
class Account extends Component {

//Constructor
constructor(props){
super(props)
this.state = {
  name : "",
  email : "",
  user:""

}

}

/*
onGobackPress(){

  this.props.navigator.push({name : 'signin'});
}*/


componentWillMount(){

    AsyncStorage.getItem('authData').then((authData_json)=>{

        let user_data = JSON.parse(authData_json)
        this.setState({
            email : user_data.password.email

        });
    });
}


  render() {
    return (
    
    <View>

           <Text> {this.state.email}</Text>

    </View>

    
        
        
      
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

export default Account
