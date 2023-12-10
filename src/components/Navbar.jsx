import { Link } from "react-router-dom";
import { styled } from "styled-components";
export const Navbar = () => {
  return (
    <DIV>
        <div className="">

      <Link className="link" to="/signup">register</Link>
      <Link className="link" to="/login">login</Link>
        </div>

        <div>
      <Link className="link"  to="/bmi">bmiCalculator</Link>

        </div>
        <div>
      <Link className="link" to="/user">user</Link>
        </div>
    </DIV>
  );
};
const DIV = styled.div`
  width: 100vw;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-content: center;
  position: fixed;
  animation-name: head;
  animation-duration: 2s;
z-index: 1;

div{
    width: 30%;
    display: flex;
   align-content: center;
   justify-content: center;
}
  @keyframes head {
    from {
      top: 5%;
    }
    to {
      top: 0%;
    }
  }

  .link{
        text-decoration: none;
        margin-right: 20px;
        color: black;
        position: relative;
    }

    .link::after{
    content: "";
    width: 0%;
    height: 2px;
    position: absolute;
    background-color: black;
    left: 0%;
    bottom: 0%;
  transition: all ease 1s;
}
.link:hover::after{
    width: 100%;
}



`;
