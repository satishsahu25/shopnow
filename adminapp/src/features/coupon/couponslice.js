import {createSlice,createAction,createAsyncThunk} from '@reduxjs/toolkit'
import couponService from './couponservice'


export const getallcoupons=createAsyncThunk('get/coupons',async(thunkAPI)=>{
    try{
        return await couponService.getallcoupons();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
});

export const createCoupon=createAsyncThunk('coupon/allcoupons',
                async(couponData,thunkAPI)=>{
                    try{
                        return await couponService.createCoupon(couponData);
                    }catch(err){
                        return thunkAPI.rejectWithValue(err);
                    }
                }
)
const initialState={
    coupons:[],
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
        builder.addCase(getallcoupons.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getallcoupons.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.coupons=action.payload;  
        })
        .addCase(getallcoupons.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        .addCase(createCoupon.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(createCoupon.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.createdcoupon=action.payload;  
        })
        .addCase(createCoupon.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        .addCase(resetState,()=>initialState)
        
    },
});


export default brandSlice.reducer;