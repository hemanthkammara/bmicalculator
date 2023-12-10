
import { useState } from "react"
import { styled } from "styled-components";
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
import { getUsers, signUp } from "../redux/authentication/action";
export const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const dispatch = useDispatch();
    const navigate=useNavigate()

    const handleRegister=()=>{
        let user={name,email,password}
        console.log(user)
        dispatch(signUp(user)).then((res)=>{
            navigate("/login")
          })

    }

    useEffect(()=>{
        dispatch(getUsers())
    
      },[])
    
    
    return(
        <DIV >
            <div className="loginDiv">
            <h1>Sign Up</h1>

            
            <label className="firstLabel" htmlFor="">name</label>
            <br />
            <input type="text" placeholder="enter" onChange={(e)=>{setName(e.target.value)}}/>
            <br />
            <label htmlFor="">email</label>
            <br />
            <input type="text" placeholder="enter" onChange={(e)=>{setEmail(e.target.value)}}/>
            <br />
            <label htmlFor="">password</label>
            <br />
            <input type="password" placeholder="enter" onChange={(e)=>{setPassword(e.target.value)}}/>
            <br />
            <button onClick={handleRegister}>Sign Up</button>
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
    padding-top: 10px;
    animation-name: register;
  animation-duration: 2s;
}


@keyframes register {
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
        top: -3%;
     
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


    .firstLabel{
        margin-top: 50px;
    }
   
`