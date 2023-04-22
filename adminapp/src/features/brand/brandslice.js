import {createSlice,createAction,createAsyncThunk} from '@reduxjs/toolkit'
import brandService from './brandservice'


export const getBrands=createAsyncThunk('brand/getbrands',async(thunkAPI)=>{
    try{
        return await brandService.getBrands();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
});
export const getBrand=createAsyncThunk('brand/getbrand',async(brandid,thunkAPI)=>{
    try{
        return await brandService.getBrand(brandid);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
});

export const updateBrand=createAsyncThunk('brand/updatebrand',async(brandid,thunkAPI)=>{
    try{
        return await brandService.updateBrand(brandid);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
});
export const deleteBrand=createAsyncThunk('delete/deletebrand',async(brandid,thunkAPI)=>{
    try{
        return await brandService.deleteBrand(brandid);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
});
export const createBrand=createAsyncThunk('brand/createbrand',
                async(brandsData,thunkAPI)=>{
                    console.log(brandsData)
                    try{
                        return await brandService.createBrand(brandsData);
                    }catch(err){
                        return thunkAPI.rejectWithValue(err);
                    }
                }
);

const initialState={
    brands:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const resetState=createAction('Reset_all')

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
        .addCase(createBrand.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(createBrand.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.createdbrand=action.payload;  
        })
        .addCase(createBrand.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        .addCase(getBrand.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getBrand.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.getbrand=action.payload.title;  
        })
        .addCase(getBrand.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
         .addCase(updateBrand.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(updateBrand.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.updatedbrand=action.payload;  
        })
        .addCase(updateBrand.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        .addCase(deleteBrand.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(deleteBrand.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.deletedbrand=action.payload;  
        })
        .addCase(deleteBrand.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        .addCase(resetState,()=>initialState)
        
    },
});


export default brandSlice.reducer;