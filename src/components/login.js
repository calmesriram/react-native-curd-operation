import React,{ Component} from 'react';
import { Text,View,TextInput,Button,Alert} from 'react-native';
import { connect } from "react-redux";
import {alogin} from "../actions";

class Login extends Component {
    constructor(props){
        super(props);          
    }
        state = {
            username:'',
            password:''
        }   
    
    authlogin(){
        console.log("hit")
    // alert(JSON.stringify(this.state));
    this.props.alogin(this.state);
    // this.props.numchangeAction(12);
    }
    
  render(){
         
      return(
          <View>
              <View>
              <TextInput value={this.state.username}  onChangeText={(username)=>{this.setState({username:username})}} placeholder="Enter the username"/>
              <TextInput value={this.state.password} onChangeText={(password)=>{this.setState({password:password})}}  placeholder="Enter the password"/>    
              <Button title="Login" onPress={this.authlogin.bind(this)}></Button>          
              </View>   
          </View>
      );
  }
}


const mapStateToProps = (state) => {
    const { num }  = state.mathReducers;
    return { num };
  }
  
export default connect(mapStateToProps, {alogin})(Login);