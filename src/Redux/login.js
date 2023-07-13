import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { selectUser } from '../app/useSlice';
import '../style/login.css'
import {login} from "../app/useSlice"

const Login = () =>{

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
const [password, setPassword]= useState("");

const dispatch = useDispatch();

const handleSumbmit = (e) =>{
    e.preventDefault();

   dispatch(
    login({
    name:name,
    email:email,
    password:password,
        loggedIn:true,
    }));
}

    return (
        
        <div className='login' onSubmit={(e) => handleSumbmit(e)}>
            {/* <div>
        {user ? <Logout/> : <Login/> }</div> */}
            <form className='login-form'>
                 <h1>Login</h1>
                 <input type="name" 
                 placeholder='Name' 
                 value={name} 
                 onChange={(e) =>setName(e.target.value)}></input>

                 <input type="email"
                  placeholder='Email'
                  value={email} 
                  onChange={(e) =>setEmail(e.target.value)}></input>
                  
                 <input type="password" 
                 placeholder='Password'
                 value={password} 
                 onChange={(e) =>setPassword(e.target.value)}></input>
<button type='login' className='login-btn'>Login</button>

            </form>
          
        </div>
    )
}
export default Login;