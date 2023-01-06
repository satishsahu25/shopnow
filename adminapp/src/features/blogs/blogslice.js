import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import blogService from './blogservice'


export const getBlogs=createAsyncThunk('blog',async(thunkAPI)=>{
    try{
        return await blogService.getBlogs();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})
const initialState={
    blogs:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const blogSlice=createSlice({
    name:"blogs",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getBlogs.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getBlogs.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.blogs=action.payload;  
        })
        .addCase(getBlogs.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        
    },
});


export default blogSlice.reducer;