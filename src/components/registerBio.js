import React,{ Component} from 'react';
import { Text,View,TextInput,Button,Alert,StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import RadioButton from 'radio-button-react-native';
import { connect } from "react-redux";
import {bioRegister} from "../actions";

class RegisterBio extends Component {
    constructor(props){
        super(props);      
    }
    state ={      
        fullname:"appasamy",     
        fathername:"father",
        date:'',
        value:''
    }
    handleOnPress(value){
        this.setState({value:value})
    }

    formdata(){       
        console.log(this.state.fathername,this.state.fullname,this.state.value,this.state.date,"All data")
        this.props.bioRegister(this.state);
    }
    render(){
        return(
            <View style={styles.container}>            
              <View style={styles.textalign}>
                   <TextInput style={styles.TextInput} onChangeText ={(fullname)=>{this.setState({fullname:fullname})}} value={this.state.fullname} underlineColorAndroid='' placeholder="Enter Full Name"/>                  
                   <TextInput style={styles.TextInput} onChangeText={(fathername)=>{this.setState({fathername})}} value={this.state.fathername} underlineColorAndroid=''  placeholder="Enter Father Name"/>                  
                   <DatePicker mode="date" onDateChange={(date) =>{ var a = JSON.stringify(date);this.setState({date:a})}}/>
            </View>       
            <View style={styles.radiobtn}>
                  <RadioButton currentValue={this.state.value} value='Firstgraduate' onPress={this.handleOnPress.bind(this)}>
                <Text>First Graduate</Text>
                 </RadioButton>
                      
                 <RadioButton currentValue={this.state.value} value='NotFirstgraduate' onPress={this.handleOnPress.bind(this)}>
                 <Text>Not First Graduate</Text>
                 </RadioButton>
            </View>
            <View> 
                <Button title="submit" onPress={this.formdata.bind(this)}></Button>
            </View>                 
              <View>     
                  <Text>{this.state.date}</Text>
                  <Text>{this.state.fullname}</Text>
                  <Text>{this.state.fathername}</Text>
                  <Text>{this.state.value}</Text>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TextInput:{              
        paddingTop:10,
        width:'100%',                
    },
    textalign:{
        paddingLeft:'10%',                
        paddingRight:'10%',
        paddingTop:10        
    },
    radiobtn:{
        flexDirection:'row',
        justifyContent:'space-evenly',
    }

})

const mapStateToProps = (state) => {
    const { num }  = state.mathReducers;
    return { num };
  }
  
  export default connect(mapStateToProps, {bioRegister})(RegisterBio);
