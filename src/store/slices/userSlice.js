import { createSlice } from "@reduxjs/toolkit";

const UserList=createSlice({
    name:"userlist",
    initialState:{
        data:[]
    },
    reducers:{}
});

export const UserListReducer=UserList.reducer;