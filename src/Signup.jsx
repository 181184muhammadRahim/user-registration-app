import React,{useState} from 'react'
import {useDispatch } from "react-redux/es/exports";
import { addUser } from './registrationSlice';
import { showErrorToastMessage } from './Notification';
const SignUp=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("");
    const dispatch=useDispatch()

    return(
        <div style={{textAlign:"center", backgroundColor:"purple"}}>
            <h1>User Signup</h1>
            <input type="text" value={email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)} /><br/>
            <input type="password" value={password} placeholder="Password" onChange={(e)=> setPassword(e.target.value)} /><br/>
            <input type="text" value={name} placeholder="Full Name" onChange={(e)=> setName(e.target.value)} /><br/>
            <button onClick={()=>{
                if(email !== "" && password!=="" && name !== ""){
                    dispatch(addUser({name:name,email:email,password:password}))
                    setEmail("")
                    setPassword("")
                    setName("")
                }else{
                    showErrorToastMessage("Please fill all fields")
                }
            }}>Sign Up</button>
        </div>
    )
}
export default SignUp;

