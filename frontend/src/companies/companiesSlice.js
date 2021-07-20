import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const host = "http://127.0.0.1:5000";
const initialState = { profile: {}, risk: {} };

export const search = createAsyncThunk(
  "companies/search",
  async (id, thunkAPI) => {
    const response = await axios.post(host + "/corporation/search", id);
    // console.log(response);
    return response.data;
  }
);

export const risk = createAsyncThunk("companies/risk", async (id, thunkAPI) => {
  const response = await axios.get(host + "/api/risk", JSON.stringify(id));
  console.log(response);
  return response.data;
});

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(search.fulfilled, (state, action) => {
      state.profile = action.payload.data;
    });
    builder.addCase(risk.fulfilled, (state, action) => {
      state.risk = action.payload.data;
    });
  },
});

// export const { logout } = usersSlice.actions;

export const selectprofile = (state) => state.companies.profile;
export const selectrisk = (state) => state.companies.risk;

export default companiesSlice.reducer;
