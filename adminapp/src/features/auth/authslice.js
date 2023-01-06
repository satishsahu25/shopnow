import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authservice'

const getuserfromlocalstorage=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null;
const initialState={
    user:getuserfromlocalstorage,
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const login=createAsyncThunk('user/adminlogin',async(user,thunkAPI)=>{
    try{
        return await authService.login(user);

    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const authslice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.pending,  (state)=>{
            state.isLoading=true;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.user=action.payload;
            state.isLoading=false;
            state.isSuccess=true;
            
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.user=null;
        });
    },
});

export default authslice.reducer;