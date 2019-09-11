import { combineReducers } from 'redux';

const initialState = {
    num:2,
    fullname:"appasamy",     
    fathername:"father",
    date:'',
    value:'',
    username:'',
    password:'',
    isloggedIn:false
}

const mathReducers = ( state=initialState, action )=>{

    switch(action.type){
    
        case "addition":
            return { ...state, num:3+action.payload};
    
        case "multiply":
            return { ...state, num: 3*action.payload};

        case "register":
            return { ...state, ...action.payload}
        
        case "login":
        return { ...state, isloggedIn:action.payload}    

        default:
            return state;
    }
}

export default combineReducers({
    mathReducers:mathReducers
})