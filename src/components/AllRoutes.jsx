import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { BmiCalculator } from "../pages/BmiCalculator";
import { PrivateRoute } from "./PrivateRoute";
import { User } from "../pages/User";
import { BmiHistory } from "../pages/BmiHistory";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route path="/bmihistory" element={
      <PrivateRoute>

        <BmiHistory />
      </PrivateRoute>
      
      }></Route>
      
      <Route
        path="/bmi"
        element={
          <PrivateRoute>
            <BmiCalculator />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};
