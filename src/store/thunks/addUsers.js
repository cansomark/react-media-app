import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUsers=createAsyncThunk("add/users",async ()=>{
    const responce=await axios.post("http://localhost:3005/users",{
        name:faker.name.firstName()
    });

    return responce.data
    
})

export {addUsers}