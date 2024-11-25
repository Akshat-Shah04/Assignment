import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const createUser = createAsyncThunk(
    "createUser",
    async(data,{rejectWithValue})=>{
        const res = await axios.post(`http://localhost:3000/users`,data);
        try {
            const res1 = await res.data
            return res1;
        } catch (error) {
            return rejectWithValue(error.res1)
        }
    }
)
export const updateUser = createAsyncThunk(
    "updateUser",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.put(`http://localhost:3000/users/${data.id}`, data);
            return res.data; 
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const showUser = createAsyncThunk(
    "showUser",
    async(argu,{rejectWithValue})=>{
        const res = await axios.get(`http://localhost:3000/users`);
        try {
            const res1 = await res.data
            return res1;
        } catch (error) {
            return rejectWithValue(error.res1)
        }
    }
)
export const deleteUser = createAsyncThunk(
    "deleteUser",
    async(id,{rejectWithValue})=>{
        const res = await axios.delete(`http://localhost:3000/users/${id}`);
        try {
            const res1 = await res.data
            return res1;
        } catch (error) {
            return rejectWithValue(error.res1)
        }
    }
)


export const crudSlice= createSlice({
    name:"crudApp",
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    reducers:{
        // Define your reducers using the builder callback
        userPending :(state)=>{
            state.loading = true;
        },
        userFullfilled : (state,action)=>{
            state.loading = false;
            // Append new User to the user array
            state.users.push(action.payload);
        },
        userRejected:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createUser.pending,(state)=>{
            state.loading= true;
        })
        .addCase(createUser.fulfilled, (state,action) =>{
            state.loading = false;
            state.users.push(action.payload)
        })
        .addCase(createUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        .addCase(showUser.pending, (state)=>{
            state.loading =  true;
        })
        .addCase(showUser.fulfilled,(state,action)=>{
            state.loading = false;

            state.users = action.payload;
        })
        .addCase(showUser.rejected,(state,action)=>{
            state.loading = false;
            state.loading = action.payload
        })

        .addCase(deleteUser.pending,(state)=>{
            state.loading = true;
        })
        .addCase(deleteUser.fulfilled,(state,action)=>{
            state.loading = false;

            const {id} = action.payload;

            if(id)
                {
                    state.users = state.users.filter((data)=>data.id !== id)
                }
        })
        .addCase(deleteUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })

        .addCase(updateUser.pending ,(state)=>{
            state.loading = true;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.map((ele) =>
                ele.id === action.payload.id ? action.payload : ele
            );
        })
        
        .addCase(updateUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

    },
})

export const {userFullfilled, userPending, userRejected} = crudSlice.actions
export default crudSlice.reducer 