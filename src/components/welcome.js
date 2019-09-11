import React,{ Component} from 'react';
import { Text,View,TextInput,Button,Alert} from 'react-native';
import { connect } from "react-redux";
import {numchangeAction} from "../actions";

class Mywelcome extends Component {
    constructor(props){
        super(props);

     this.state ={
         inputvalue:''
     }
    }
    btnsubmited()
    {
        alert(this.state.inputvalue)
        this.props.numchangeAction(this.state.inputvalue);
    //   Alert.alert("Message","Hai")
    }
    render(){
        return(
            <View>
                <Text>{this.props.num}</Text>
                <View>
                <TextInput onChangeText={(para_num) =>{this.setState({inputvalue:para_num})}} value={this.state.inputvalue} style={{borderColor:'red',borderStyle:'solid'}} title="Enter the value here" placeholder="Enter the value"/>
                <Button title="save" onPress={()=>{this.btnsubmited();}}></Button>
                </View>
                <View style={{alignItems:'center',size:33}}>
                    <Text>{this.state.inputvalue}</Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
  const { num }  = state.mathReducers;
  return { num };
}

export default connect(mapStateToProps, {numchangeAction})(Mywelcome);