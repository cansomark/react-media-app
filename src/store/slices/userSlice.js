import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUsers } from "../thunks/addUsers"; 
import { removeUsers } from "../thunks/removeUsers";
const UserList=createSlice({
    name:"userlist",
    initialState:{
        data:[],
        isLoading:false,
        error:null
    },
    extraReducers(builder){
        builder.addCase(fetchUsers.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        }); 
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error;
        });

        //adduser
        builder.addCase(addUsers.pending,(state,action)=>{
            state.isLoading=true
        });

        builder.addCase(addUsers.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data.push(action.payload)
        });
        builder.addCase(addUsers.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error;
        });

        //Remove Users
        builder.addCase(removeUsers.pending,(state,action)=>{
            state.isLoading=true
        });

        builder.addCase(removeUsers.fulfilled,(state,action)=>{
            state.isLoading=false
            state.data=state.data.filter((user)=>user.id!==action.payload.id);
        })

        builder.addCase(removeUsers.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error
        })
    }
});

export const UserListReducer=UserList.reducer;