import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import blogcategoriesService  from './bcateservice'


export const getblogCategories=createAsyncThunk('blogcategory',async(thunkAPI)=>{
    try{
        return await blogcategoriesService. getblogCategories();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})
const initialState={
    blogcategories:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const blogcateSlice=createSlice({
    name:"blogs",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getblogCategories.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getblogCategories.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.blogcategories=action.payload;  
        })
        .addCase(getblogCategories.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        
    },
});


export default blogcateSlice.reducer;