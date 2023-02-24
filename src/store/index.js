import { configureStore } from "@reduxjs/toolkit";
import { UserListReducer } from "./slices/userSlice";
const store=configureStore({
   reducer:{
        users:UserListReducer
   }
})


export {store}