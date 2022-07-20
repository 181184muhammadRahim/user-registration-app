import { createSlice } from "@reduxjs/toolkit";

const initialState={
    current_user: JSON.parse(localStorage.getItem("current-user")) || "",
    Users: JSON.parse(localStorage.getItem("user-list")) || []
}
const registrationSlice=createSlice(
    {
        name:"registration",
        initialState,
        reducers:{
            addUser(state,action){
                let flag=false;
                for(let i=0;i<state.Users.length;i++){
                    if(state.Users[i].Email===action.payload.email){
                        flag=true;
                        break;
                    }
                }
                if(!flag){
                    if(state.Users.length===0){
                        state.Users.push({
                            UserId:0,
                            Name:action.payload.name,
                            Email:action.payload.email,
                            Password:action.payload.password
                        })
                    }else{
                        state.Users.push({
                            UserId:state.Users[state.Users.length-1].UserId+1,
                            Name:action.payload.name,
                            Email:action.payload.email,
                            Password:action.payload.password
                        })
                    }
                    alert("User registered")
                }else{
                    alert("User already exist")
                }
            },
            loginUser(state,action){
                let flag=false;
                for(let i=0;i<state.Users.length;i++){
                    if(state.Users[i].Email===action.payload.email && state.Users[i].Password===action.payload.password){
                        flag=true;
                        break;
                    }
                }
                console.log(flag);
                if(flag){
                    state.current_user=action.payload.email
                }else{
                    alert("Email or password is not correct")
                }


            },
            logoutUser(state){
                state.current_user="";
            }
        }

    }
)
export const {
    addUser,
    loginUser,
    logoutUser
  } = registrationSlice.actions;
  export default registrationSlice.reducer;