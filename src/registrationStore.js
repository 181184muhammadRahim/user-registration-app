import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./registrationSlice";
const applyMiddleware=(store) =>{
    return next=> action =>{
        const result=next(action);
        localStorage.setItem('current-user',JSON.stringify(store.getState().registration.current_user))
        localStorage.setItem('user-list',JSON.stringify(store.getState().registration.Users))
        return result;
    }
}
const store=configureStore(
    {
        reducer:{
            registration:registrationSlice
        },
        middleware: getDefaultMiddleware=>getDefaultMiddleware().concat(applyMiddleware),
    }
);
export default store;