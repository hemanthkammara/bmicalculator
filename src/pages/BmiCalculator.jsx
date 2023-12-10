import { useState } from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBmi, postBmi } from "../redux/bmi/action";
export const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [result, setResult] = useState("");

  const user = useSelector((store) => {
    return store.authReducer.login;
  });
  const bmis = useSelector((store) => {
    return store.bmiReducer.bmi;
  });
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateBmi = () => {
    let heightM = height * 0.3048;
    let Bmi = weight / (heightM * heightM);
    let answer;
    if (Bmi < 18.5) {
      answer = "Under weight";
    } else if (Bmi >= 18.5 && Bmi <= 24.9) {
      answer = "Normal";
    } else if (Bmi > 25) {
      answer = "Over weight";
    }
    setBmi(Bmi);
    setResult(answer);

    let obj = {
      bmiValue: Bmi,
      result: answer,
      userId: user.id,
    };
    let arr = [];
    arr.push(obj);
    setData(arr);
    setHeight("");
    setWeight("");
    dispatch(postBmi(obj));
  };

  const handleHistory = () => {
    navigate("/bmihistory")
  };

  useEffect(() => {
    dispatch(getBmi());
  }, []);

  //   useEffect(()=>{
  //     let arr=bmis.filter((e,i)=>{
  //         if(e.userId==user.id){
  //             return e
  //         }
  //         setData(arr);
  //         console.log(arr,"arr")
  //     })

  //   },[bmis])
  console.log(user.name);

  return (
    <DIV>
      <button className="history" onClick={handleHistory}>
        BMI History
      </button>
      <div className="loginDiv">
        <h1 className="head">BMI Calculate</h1>

        <label htmlFor="">Height </label>
        <br />
        <input
          type="number"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
          placeholder="enter in feet"
        />
        <br />
        <label htmlFor="">Weight</label>
        <br />
        <input
          type="number"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
          placeholder="enter in kg"
        />
        <br />
        <button onClick={calculateBmi}>calculate</button>
        <br />
      </div>

      <div className="resultDiv">
        {data.length > 0 &&
          data.map((e, i) => {
            return (
              <div key={i}>
                <p className="topHead">Last BMI value</p>
                <p>BMI value : {e.bmiValue}</p>
                <p>
                  result : <span>{e.result}</span>
                </p>
              </div>
            );
          })}
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  .loginDiv {
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

  input {
    border: none;
    border-bottom: 1px solid black;
  }
  input:focus{
      outline: none;
    }

  button {
    width: 40%;
    background-color: black;
    color: white;
    border: none;
    height: 30px;
  }
  .head {
    position: absolute;
    top: -3%;

    z-index: 1;
    font-size: 50px;
    font-weight: 200;
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

  .firstLabel {
    margin-top: 50px;
  }

  .resultDiv {
    width: 20%;

    background-color: white;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 42%;
    left: 26%;

    animation-name: resDiv;
    animation-duration: 2s;
  }

  @keyframes resDiv {
    from {
      top: 44%;
    }
    to {
      top: 22%;
    }
  }

  p {
    font-size: 20px;
    padding-left: 15px;
  }
  .topHead {
    margin-bottom: 35px;
    font-weight: 600;
    font-size: 20px;
  }

  .greet {
  }
  .history {
    position: absolute;
    top: 10%;
    left: 44%;
    width: 10%;
  }
`;
