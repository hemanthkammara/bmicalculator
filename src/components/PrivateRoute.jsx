import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

export const PrivateRoute=({children})=>{
    const isAuth=useSelector((state)=>{return state.authReducer.isAuth})
    const navigate=useNavigate()
return isAuth?children:(<Navigate to="/login"/>)
}