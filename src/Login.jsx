import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux/es/exports";
import {loginUser} from "./registrationSlice";
import {showErrorToastMessage} from "./Notification";
const Login=()=>{
    const loginListener=useSelector((state)=>state.registration.current_user);
    const dispatch=useDispatch();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    if(loginListener.email === ""){
        return(
            <div style={{textAlign:"center", backgroundColor:"purple"}}>
                <h1>User Login</h1>
                <input type="text" value={email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)} /><br/>
                <input type="password" value={password} placeholder="Password" onChange={(e)=> setPassword(e.target.value)} /><br/>
                <button onClick={()=>{
                    if(email !== "" && password!==""){
                        dispatch(loginUser({email:email,password:password}))
                        setEmail("")
                        setPassword("")
    
                    }else{
                        showErrorToastMessage("Please fill all fields")
                    }
                }}>Login</button>
            </div>
        )
    }else{
        return (
            <ul>
                <h1>User Data:</h1>
                <li>User Email:{loginListener.email}</li>
                <li>User Name:{loginListener.name}</li>
            </ul>        )
    }
}
export default Login;