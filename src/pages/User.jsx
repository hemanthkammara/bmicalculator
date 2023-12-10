
import { useState } from "react"
import { styled } from "styled-components";
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
import { editDetails, getUsers, logout, signUp } from "../redux/authentication/action";
import {useSelector} from "react-redux"
import { LOGOUT } from "../redux/authentication/actionType";
export const User=()=>{

    const user=useSelector((store)=>{return store.authReducer.login})
  const bmis=useSelector((store)=>{return store.bmiReducer.bmi});

    const [name,setName]=useState(user.name);
    const [email,setEmail]=useState(user.email);
    const[password,setPassword]=useState(user.password);

    const dispatch = useDispatch();
    const navigate=useNavigate()

    const handleEdit=()=>{
        let obj={name,email,password}
        console.log(user)
      dispatch(editDetails(obj,user.id))

    }

    const handleLogout=()=>{
      dispatch(logout())
     alert("LOGOUT successfully")
     navigate("/")
    }

    useEffect(()=>{
        dispatch(getUsers())
    
      },[])
    
    
    return(
        <DIV >
            <div className="loginDiv">
            <h1>Edit Details</h1>

            
            <label className="firstLabel" htmlFor="">name</label>
            <br />
            <input type="text" placeholder="enter" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <br />
            <label htmlFor="">email</label>
            <br />
            <input type="text" placeholder="enter" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br />
            <label htmlFor="">password</label>
            <br />
            <input type="password" placeholder="enter" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <br />
            <button onClick={handleEdit}>Submit</button>
            </div>

            <div className="details">
                <p className="userHead">User Details</p>
                <div>

                <img src="https://placehold.co/400" alt="" />
                <p>name :{user.name}</p>
                </div>
                <p>email :{user.email}</p>

                <button onClick={handleLogout}>Log out</button>
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

    button{
        width: 40%;
        background-color: black;
        color: white;
       border: none;
       height: 30px;
       margin-bottom: 5px;
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
   

   .details{
    width: 15%;
    background-color: white;
    position: absolute;
    top: 25%;
    left: 20%;
    padding-left: 10px;
    animation-name: details;
    animation-duration: 2s;
    
   }

   @keyframes details {
    from {
      top: 27%;
    }
    to {
      top: 25%;
    }
  }
   

   .details div{
        
        display: flex;
        align-items: center;

   }

   .details div P{
    margin-left: 10px;
   }
   


   img{
   width: 40px;
    border-radius: 100%;
    height: 40px;
    
   }
   .userHead{
 font-size: 25px;
 margin-bottom: 10px;
   }
`