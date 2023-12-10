import { GET_BMI, UPDATE_BMI } from "./actionType"



const initialState={
   bmi:[]
    
}

export const reducer=(state=initialState,{type,payload})=>{

    switch(type){
       case GET_BMI:{
        return{
            ...state,bmi:payload
        }
       }
       case UPDATE_BMI:{
        return{
            ...state,bmi:payload
        }
       }
       default:{
        return state
       }
    }

}