import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const host = "http://127.0.0.1:5000";
const initialState = { profile: {}, risk: {} };

export const search = createAsyncThunk(
  "companies/search",
  async (id, thunkAPI) => {
    const response = await axios.post(host + "/api/search", JSON.stringify(id));
    console.log(response);
    return response.data;
  }
);

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(login.fulfilled, (state, action) => {
  //     state.user = action.payload;
  //   });
  //   builder.addCase(register.fulfilled, (state, action) => {
  //     state.user = action.payload;
  //   });
  // },
});

// export const { logout } = usersSlice.actions;

export const selectprofile = (state) => state.profile;
export const selectrisk = (state) => state.risk;

export default companiesSlice.reducer;
