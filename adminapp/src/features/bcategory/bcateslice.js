import { createSlice, createAction,createAsyncThunk } from "@reduxjs/toolkit";
import blogcategoriesService from "./bcateservice";

export const getblogCategories = createAsyncThunk(
  "blogcategory",
  async (thunkAPI) => {
    try {
      return await blogcategoriesService.getblogCategories();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const createBlogcategories = createAsyncThunk(
  "blog/createblogcate",
  async (bcateData, thunkAPI) => {
    try {
      return await blogcategoriesService.createBlogcategories(bcateData);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const deleteBlogcategories = createAsyncThunk(
  "blog/deleteblogcate",
  async (id, thunkAPI) => {
    try {
      return await blogcategoriesService.deleteBlogcategories(id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState = {
  blogcategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const resetState=createAction('Reset_all');

export const blogcateSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getblogCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getblogCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.blogcategories = action.payload;
      })
      .addCase(getblogCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(createBlogcategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlogcategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.createdblogcategories = action.payload;
      })
      .addCase(createBlogcategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(deleteBlogcategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBlogcategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.deletedblogcategories = action.payload;
      })
      .addCase(deleteBlogcategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(resetState,()=>initialState);
      
  },
});

export default blogcateSlice.reducer;
