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


class LandingPage extends Component {

// Constructor
constructor(props){
super(props)
this.state = {
  email : "",
  password : "",
  echo : ""
  

}

}

onSignInPress(){
        

this.props.navigator.push({name : 'signin'});


}
 

  

  

render() {
        AsyncStorage.getItem('UID123',(err,result) => {
        //console.log(result)
        })

    return (


    <View style={styles.container}>
        <Text>I NEED A,</Text>
        
        <TouchableHighlight onPress={this.onSignInPress.bind(this)}><Text>Login With Google</Text></TouchableHighlight>
        
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

export default LandingPage
