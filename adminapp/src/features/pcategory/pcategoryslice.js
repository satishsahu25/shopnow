import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import productcategoriesService from './pcatgeoryservice'


export const getproductCategories=createAsyncThunk('brand',async(thunkAPI)=>{
    try{
        return await productcategoriesService.getproductCategories();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})
const initialState={
    productcategories:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const pcategorySlice=createSlice({
    name:"productcategories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getproductCategories.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getproductCategories.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.productcategories=action.payload;  
        })
        .addCase(getproductCategories.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        
    },
});


export default pcategorySlice.reducer;