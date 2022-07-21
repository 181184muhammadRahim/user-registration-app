import React from "react";
import { useSelector } from "react-redux";
const Userlist=()=>{
    const UserList=useSelector((state)=>state.registration.Users) || [];
    return(
        <ol>
            <h1>User list</h1>
            {
                UserList.map((element)=>{
                    return <li>{element.Email}</li>
                })
            }
        </ol>
    )

}
export default Userlist;