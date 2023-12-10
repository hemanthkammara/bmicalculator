import axios from "axios"
import { GET_USERS, LOGIN_SUCCESSFUL, LOGOUT, SIGN_UP_SUCCESSFUL } from "./actionType"
export const signUp=(user)=>(dispatch)=>{
  return axios.post("https://bmicalculator-jbke.onrender.com/users",user)
   .then((res)=>{console.log(res)
   dispatch(getUsers)
})
}
export const editDetails=(user,id)=>(dispatch)=>{
  return axios.patch(`https://bmicalculator-jbke.onrender.com/users/${id}`,user)
   .then((res)=>{console.log(res)
    dispatch({type:LOGIN_SUCCESSFUL,payload:res.data})
})
}

export const  getUsers=()=>(dispatch)=>{
axios.get("https://bmicalculator-jbke.onrender.com/users")
.then((res)=>{
    console.log(res,"getData")
    dispatch({type:GET_USERS,payload:res.data})
})
}

export const login=(user)=>(dispatch)=>{
dispatch({type:LOGIN_SUCCESSFUL,payload:user})
}

export const logout=()=>(dispatch)=>{
dispatch({type:LOGOUT,payload:{}})
}