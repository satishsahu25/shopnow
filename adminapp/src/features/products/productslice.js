import {createSlice,createAction,createAsyncThunk} from '@reduxjs/toolkit'
import productService from './productservice'


export const getProducts=createAsyncThunk('product',async(thunkAPI)=>{
    try{
        return await productService.getProducts();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
});

export const createProduct=createAsyncThunk('product/createproduct',
                async(productsData,thunkAPI)=>{
                    try{
                        return await productService.createProduct(productsData);
                    }catch(err){
                        return thunkAPI.rejectWithValue(err);
                    }
                }
);


const initialState={
    products:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const resetState=createAction('Reset_all');

export const productSlice=createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.products=action.payload;  
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        .addCase(createProduct.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(createProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.createdProduct=action.payload;  
        })
        .addCase(createProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        .addCase(resetState,()=>initialState);
        
    },
});


export default productSlice.reducer;