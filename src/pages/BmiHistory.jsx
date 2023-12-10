import { useState } from "react"
import { useEffect } from "react"
import {useSelector} from "react-redux"
import {styled} from "styled-components"
export const BmiHistory=()=>{
    const[data,setData]=useState([])

    const user=useSelector((store)=>{return store.authReducer.login})
    const bmis=useSelector((store)=>{return store.bmiReducer.bmi});

    useEffect(()=>{
      let arr=bmis.filter((e,i)=>{
        if(e.userId==user.id){
            return e
        }
      })
      arr=arr.reverse()
      setData(arr)
    },[])
    return(
        <DIV >
            <h1 className="head">BMI History</h1>
            <div className="Grid">

            {data.length>0==true?data.map((e,i)=>{
                return <div className="singleDiv" key={i}>
                   
                <p>BMI value : {e.bmiValue}</p>
            <p >result : <span >{e.result}</span></p>

                </div>
            }):<h1>...empty </h1>
            }
            </div>

        </DIV>
    )
}
const DIV=styled.div`
.Grid{

    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    position: absolute;
    top: 17%;
    left: 15%;

    animation-name: history;
    animation-duration: 2s;
}


  @keyframes history {
    from {
      top: 19%;
    }
    to {
      top: 17%;
    }
  }

    .singleDiv{
        background-color: white;
        padding: 10px;
    }



    .head {
    position: absolute;
    top:5%;
left: 43%;
    z-index: 1;
    font-size: 35px;
    font-weight: 500;
  }

  .head::after {
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

  @keyframes elite {
    0% {
      width: 0%;
      left: 0%;
    }
    50% {
      width: 100%;
      left: 0%;
    }
    100% {
      width: 0%;
      left: 100%;
    }
  }


`