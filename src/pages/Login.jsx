import { useState } from "react"
import { styled } from "styled-components";
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react";
import { getUsers, login } from "../redux/authentication/action";
import {useNavigate} from "react-router-dom"
export const Login=()=>{
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const users=useSelector((store)=>{return store.authReducer.users})
    const handleLogin=()=>{
        let data={email,password}
        console.log(data)
        let arr=users.filter((e,i)=>{
              if(e.email==email){
                return e
              }
        })
        if(arr.length>0){
            if(arr[0].password==password){
           dispatch(login(arr[0]))
           alert("login successful")
         navigate("/bmi")
            }else{
                alert("wrong password")
            }
        }
        else if (arr.length==0){
            alert("email not found please register")
        }


    }

    
    useEffect(()=>{
        dispatch(getUsers())
      },[])
console.log(users,"users")
    return(
        <DIV >
            <div className="loginDiv">
            <h1>Login</h1>

            {/* <h2>Login</h2> */}
            <label htmlFor="">email</label>
            <br />
            <input type="text" placeholder="enter" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br />
            <label htmlFor="">password</label>
            <br />
            <input type="password" placeholder="enter" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <br />
            <button onClick={handleLogin}>Login</button>
            </div>
        </DIV>
    )
}

const DIV=styled.div`
.loginDiv{

    height: 60vh;
    background-color: white;
    width: 20%;
    position: absolute;
    top: 25%;
    left: 55%;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    animation-name: login;
  animation-duration: 2s;
}


@keyframes login {
    from {
      top: 28%;
    }
    to {
      top: 25%;
    }
  }
   
    input{
     border: none;
     border-bottom: 1px solid black;
    }
    input:focus{
      outline: none;
    }

    button{
        width: 40%;
        background-color: black;
        color: white;
       border: none;
       height: 30px;
    }

    h1{
        position: absolute;
        top: 1%;
     
        z-index: 1;
        font-size: 50px;
     font-weight: 200;
    }

    h1::after{
    content: "";
    width: 0%;
    height: 2px;
    background-color: black;
    position: absolute;
    left: 0%;
    bottom: 0%;
    animation-name: elite;
    animation-duration: 2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    transition: all ease;
}

@keyframes elite{
   0% {
        width: 0%;
       left: 0%;
      
    }
    50%{
        width: 100%;
        left: 0%;
       
    }
    100%{
        width: 0%;
        left: 100%;
       
    }
}
   
`