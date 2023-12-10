import axios from "axios"
import { GET_BMI } from "./actionType"


export const getBmi=()=>(dispatch)=>{
    axios.get("https://bmicalculator-jbke.onrender.com/bmi").then((res)=>{console.log(res)
    dispatch({type:GET_BMI,payload:res.data})
    })
}

export const postBmi=(data)=>(dispatch)=>{
    axios.post("https://bmicalculator-jbke.onrender.com/bmi",data)
    .then((res)=>{
        console.log(res.data)
  dispatch(getBmi())
    })
}