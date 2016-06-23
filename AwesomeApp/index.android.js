/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';

import SignIn from './app/signin'
import SignUp from './app/signup'
//import Account from './app/account'
import UpdateInfo from './app/update_userinfo'
import LandingPage from './app/LandingPage'


var ROUTES = {

  signin : SignIn,
  signup : SignUp,
  //account : Account,
  landingpage : LandingPage,
  updateinfo:UpdateInfo
}

class AwesomeApp extends Component {

 renderScene(route,navigator){
   
   var Component= ROUTES[route.name]
   return <Component route={route} navigator={navigator} />


 }
 
  render() {
    return (

      <Navigator 
      style = {styles.mainscreen}
      initialRoute={{name:'landingpage'}}
      renderScene={this.renderScene}
      configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight}}      
      />



      /*
      
      <View style={styles.container}>
        <Text>Sign In</Text>
        <TextInput placeholder="Email Address"/>
        <TextInput placeholder="Password"/>
        <TextInput placeholder="Re-Enter Password"/>
        <Text> </Text>
        <TouchableHighlight><Text>Sign In</Text></TouchableHighlight>
      </View>

      */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin:30
  },
  mainscreen : {
    flex : 1

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

AppRegistry.registerComponent('AwesomeApp', () => AwesomeApp);
