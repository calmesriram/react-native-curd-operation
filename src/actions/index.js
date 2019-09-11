var axios =require('axios');
var http ="https://react-native-app-node.herokuapp.com"
import AsyncStorage from '@react-native-community/async-storage';

export const numchangeAction = (numbers) => {
    console.log(numbers,"**************")
    return {
        type:"multiply",
        payload:numbers
    }
}


export const bioRegister = (regdetails) =>{
    console.log(regdetails,"+++++++++++++++++++++++")
    return {
        type:'register',
        payload:regdetails
    }
    
}

export const  alogin = (logindet) =>{
     try {        
         axios.post(http+'/login',logindet).then((res) =>{
            if(res){                
                AsyncStorage.setItem('token',res.data['token'])
                AsyncStorage.getItem('token').then((value) => {
                    
                    if (value !== null) {
                        console.log("value", value);
                    }
                });
       
            }
        }).catch((err)=>{
            console.log(err)
        })
        

      }catch (e) {
        alert(JSON.stringify(e))
      }

    
    return {
        type:'login',
        payload:logindet
    }
    
}


// export {numchangeAction}