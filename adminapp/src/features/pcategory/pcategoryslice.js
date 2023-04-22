import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import productcategoriesService from "./pcatgeoryservice";

export const getproductCategories = createAsyncThunk(
  "get/productcate",
  async (thunkAPI) => {
    try {
      return await productcategoriesService.getproductCategories();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const createProductcate = createAsyncThunk(
  "create/productcategory",
  async (productcatedata, thunkAPI) => {
    try {
      return await productcategoriesService.createProductcate(productcatedata);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const getProductcate=createAsyncThunk('get/roductcate',async(productcateid,thunkAPI)=>{
    try{
        return await productcategoriesService.getProductcate(productcateid);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
});

export const updateProductcate=createAsyncThunk('update/updateproductcate',async(productcateid,thunkAPI)=>{
    try{
        return await productcategoriesService.updateProductcate(productcateid);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
});
export const deleteProductcate=createAsyncThunk('delete/deleteproductcate',async(productcateid,thunkAPI)=>{
    try{
        return await productcategoriesService.deleteProductcate(productcateid);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
});

const initialState = {
  productcategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const resetState = createAction("Reset_all");

export const pcategorySlice = createSlice({
  name: "productcategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getproductCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getproductCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.productcategories = action.payload;
      })
      .addCase(getproductCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(createProductcate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProductcate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.createdcategories = action.payload;
      })
      .addCase(createProductcate.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getProductcate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductcate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.getcategory = action.payload;
      })
      .addCase(getProductcate.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
        .addCase(deleteProductcate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProductcate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.deletedcategory = action.payload;
      })
      .addCase(deleteProductcate.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(updateProductcate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductcate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updatedcategory = action.payload;
      })
      .addCase(updateProductcate.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default pcategorySlice.reducer;
