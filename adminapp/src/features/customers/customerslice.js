import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import customerService from './customerservice'


export const getUsers=createAsyncThunk('user/allusers',async(thunkAPI)=>{
    try{
        return await customerService.getUsers();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})
const initialState={
    customers:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const customerSlice=createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getUsers.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getUsers.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.customers=action.payload;  
        })
        .addCase(getUsers.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        
    },
});


export default customerSlice.reducer;