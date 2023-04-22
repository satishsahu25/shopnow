import {createSlice,createAction,createAsyncThunk} from '@reduxjs/toolkit'
import colorService from './colorservice'


export const getColors=createAsyncThunk('get/color',async(thunkAPI)=>{
    try{
        return await colorService.getColors();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
});

export const createColor=createAsyncThunk('color/createcolor',
                async(colorsData,thunkAPI)=>{
                    try{
                        return await colorService.createColor(colorsData);
                    }catch(err){
                        return thunkAPI.rejectWithValue(err);
                    }
                }
)
const initialState={
    colors:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const resetState=createAction('Reset_all');

export const colorSlice=createSlice({
    name:"colors",
    initialState,
    reducers:{
       
    },
    extraReducers:(builder)=>{
        builder.addCase(getColors.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getColors.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.colors=action.payload;  
        })
        .addCase(getColors.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        .addCase(createColor.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(createColor.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.createdColor=action.payload;  
        })
        .addCase(createColor.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;  
        })
        .addCase(resetState,()=>initialState);
        
    },
});


export default colorSlice.reducer;