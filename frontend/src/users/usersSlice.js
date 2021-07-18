import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { user: "" };

export const login = createAsyncThunk(
  "users/login",
  async (userInfo, thunkAPI) => {
    const response = await axios.post(
      "http://127.0.0.1:5000/auth/login",
      JSON.stringify(userInfo)
    );
    console.log(response);
    return response.data;
  }
);

export const register = createAsyncThunk(
  "users/register",
  async (userInfo, thunkAPI) => {
    const response = await axios.post(
      "http://127.0.0.1:5000/auth/register",
      JSON.stringify(userInfo)
    );
    console.log(response);
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout(state, action) {
      state.user = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { logout } = usersSlice.actions;

export const selectUser = (state) => state.user;

export default usersSlice.reducer;
