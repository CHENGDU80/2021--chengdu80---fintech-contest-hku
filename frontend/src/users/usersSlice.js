import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const host = "http://127.0.0.1:5000";
const initialState = { user: "a", watchlist: [] };

export const login = createAsyncThunk(
  "/api/login",
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
  "api/register",
  async (userInfo, thunkAPI) => {
    const response = await axios.post(
      host + "/api/register",
      JSON.stringify(userInfo)
    );
    console.log(response);
    return response.data;
  }
);

export const getWatchlist = createAsyncThunk(
  "api/watchlist",
  async (userInfo, thunkAPI) => {
    const response = await axios.get(
      host + "/api/watchlist",
      JSON.stringify(userInfo)
    );
    console.log(response);
    return response.data;
  }
);

export const putWatchlist = createAsyncThunk(
  "api/watchlist",
  async (userInfo, thunkAPI) => {
    const response = await axios.put(
      host + "/api/watchlist",
      JSON.stringify(userInfo)
    );
    console.log(response);
    return response.data;
  }
);

export const deleteWatchlist = createAsyncThunk(
  "api/watchlist",
  async (userInfo, thunkAPI) => {
    const response = await axios.delete(
      host + "/api/watchlist",
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
    builder.addCase(getWatchlist.fulfilled, (state, action) => {
      state.watchlist = action.payload;
    });
  },
});

export const { logout } = usersSlice.actions;

export const selectUser = (state) => state.users.user;
export const selectWatchlist = (state) => state.users.watchlist;

export default usersSlice.reducer;
