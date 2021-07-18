import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const host = "http://127.0.0.1:5000";
const initialState = { user: "a" };

export const login = createAsyncThunk(
  "users/login",
  async (userInfo, thunkAPI) => {
    const response = await axios.post(
      host + "/api/login",
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
      host + "/api/register",
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

export const selectUser = (state) => state.users.user;

export default usersSlice.reducer;
