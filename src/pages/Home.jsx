import { BmiCalculator } from "./BmiCalculator"
import {styled} from "styled-components"
import { useNavigate } from "react-router-dom";
export const Home=()=>{
    const navigate = useNavigate();

    const navigateLogin=()=>{
        navigate("/login")
    }
    return(
        <DIV style={{paddingTop:"100px"}}>
        
            {/* <BmiCalculator/> */}
           
            {/* <img src="https://media.istockphoto.com/id/1652806329/photo/cubes-form-the-expression-bmi-3d-rendering-on-black-background.webp?b=1&s=170667a&w=0&k=20&c=qP9S2_59zOoV4F9MlwO1xtsP2FJ5L-oQ05mEU-r0wtw=" alt="" /> */}
            <div>

           {/* <img src="https://media.istockphoto.com/id/528072248/photo/bmi-body-mass-index-written-on-a-notepad-sheet.jpg?s=612x612&w=0&k=20&c=FuiMivhVuaOTV8K_8yooWaTpZ0ie5iuOZwoRbZPoo3g=" alt="" /> */}

           <img src="https://media.istockphoto.com/id/1453228735/photo/close-up-of-hands-of-a-female-nutricionist-doctor-and-deportologist-pointing-out-a-document.jpg?s=612x612&w=0&k=20&c=KRtoYC8nBW5GWCZDOjYesvcLFrqMBxmdZygsiAeL7E4=" alt="" />
            </div>

            <div>
            <h1>Welcome to</h1>
            <h1>BMI Calculate </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aperiam ab cum deserunt quae, praesentium culpa</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aperiam ab cum deserunt quae, praesentium culpa</p>

            <button onClick={navigateLogin}>Log in</button>
            </div>
        </DIV>
    )
}

const DIV=styled.div`
    display: flex;
width: 85%;
position: absolute;
left: 8%;
top: 5%;
animation-name: home;
  animation-duration: 2s;



@keyframes home {
    from {
      top: 7%;
    }
    to {
      top: 5%;
    }
  }
   
    div{
        width: 50%;
        background-color: white;
    }
    img{
        
    }

    button{
        width: 30%;
        background-color: black;
        color: white;
       border: none;
       font-size: 15px;
       height: 30px;
    }
`