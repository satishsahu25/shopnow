import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import enquiryService from './enquiryservice'


export const getEnquiry=createAsyncThunk('enquiry',async(thunkAPI)=>{
    try{
        return await enquiryService.getEnquiry();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})
const initialState={
    enquiries:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const enquirySlice=createSlice({
    name:"enquiries",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getEnquiry.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getEnquiry.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.enquiries=action.payload;  
        })
        .addCase(getEnquiry.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        
    },
});


export default enquirySlice.reducer;