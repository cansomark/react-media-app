import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUsers=createAsyncThunk('users/fetch',async ()=>{
    const responce=await axios.get("http://localhost:3005/users");
    return responce.data
});

export {fetchUsers}