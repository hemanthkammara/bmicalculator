import { GET_USERS, LOGIN_SUCCESSFUL, LOGOUT, SIGN_UP_SUCCESSFUL } from "./actionType"

const initialState={
    users:[],
    login:{},
    isAuth:false,
}

export const reducer=(state=initialState,{type,payload})=>{

    switch(type){
       case SIGN_UP_SUCCESSFUL:{
        return{
            ...state,users:payload
        }
       }
       case LOGIN_SUCCESSFUL:{
        return{
            ...state,login:payload,isAuth:true
        }
       }
       case LOGOUT:{
        return{
            ...state,login:payload,isAuth:false
        }
       }
       case GET_USERS:{
        return{
            ...state,users:payload
        }
       }

       default:{
        return state
       }
    }

}