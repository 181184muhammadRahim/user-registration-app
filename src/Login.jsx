import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux/es/exports";

import { loginUser,logoutUser } from "./registrationSlice";
const Login=()=>{
    const loginListener=useSelector((state)=>state.registration.current_user);
    const dispatch=useDispatch();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    useEffect(() => {
        console.log("here");
        if(loginListener !== ""){
            alert("Login Successful")
        }
    }, [loginListener])
    
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
                    alert("Please fill all fields")
                }
            }}>Login</button>
            {
                loginListener==="" ? <button disabled>Log Out</button>:
                <button onClick={()=>{
                    dispatch(logoutUser())  
                }}>Log Out</button>
            }
        </div>
    )
}
export default Login;