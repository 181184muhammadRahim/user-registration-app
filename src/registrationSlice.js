import { createSlice } from "@reduxjs/toolkit";

const initialState={
    current_user: "",
    Users:[
        {
            UserId:0,
            Name:"Rahim",
            Email:"rahim123@gmail.com",
            Password:"123456"
        },
        {
            UserId:1,
            Name:"Ahmed",
            Email: "ahmed@gmail.com",
            Password:"123456"
        }
    ]
}
let ID=2;
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
                    state.Users.push({
                        UserId:ID++,
                        Name:action.payload.name,
                        Email:action.payload.email,
                        Password:action.payload.password
                    })
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