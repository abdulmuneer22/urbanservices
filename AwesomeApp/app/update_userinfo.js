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

let UID123_new_object = {

  'addressUpdated': 'yes'

}

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
  mobile:"",
  uid : "",
  address : ""
  
  

}

}




onUpdatePress(){


//Update Information of curent user
let firbase_baseurl = "https://todoappmuneer.firebaseio.com/"
let node = "users/"
let username = this.state.name;
let app = new Firebase(firbase_baseurl+node+username);//new url

app.update({
  uid : this.state.uid,
  name: this.state.name,
  address_1 : this.state.address_1,
  address_2: this.state.address_2,
  mobile : this.state.mobile

});

//Set Updated_Address Flag to true, So need to redirect customer to update info after login


}


  

render() {

  //AsyncStorage.setItem('UID123',JSON.stringify(UID123_new_object))

 // retrive curent user name from async
    AsyncStorage.getItem("_uid")
    .then(
    (value) => {
    this.setState({uid :value})

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


<TouchableHighlight onPress={this.onUpdatePress.bind(this)}><Text>Update</Text></TouchableHighlight>
<Text>{this.state.address}</Text>


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
