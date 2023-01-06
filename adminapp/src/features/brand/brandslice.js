import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import brandService from './brandservice'


export const getBrands=createAsyncThunk('brand',async(thunkAPI)=>{
    try{
        return await brandService.getBrands();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})
const initialState={
    brands:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const brandSlice=createSlice({
    name:"brands",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getBrands.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getBrands.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.brands=action.payload;  
        })
        .addCase(getBrands.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        
    },
});


export default brandSlice.reducer;