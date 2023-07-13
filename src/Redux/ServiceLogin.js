import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../app/useSlice";
import Login from './login'
 import Logout from './logout';
const ServiceLogin = () =>{
   const user = useSelector(selectUser)
    return (
        <div>
          {user ? <Logout></Logout> : <Login/>}
        </div>
    )
}
export default ServiceLogin;