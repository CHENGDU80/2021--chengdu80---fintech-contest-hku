import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const host = "http://127.0.0.1:5000";
const initialState = { profile: {}, risk: {}, cluster: {} };

export const search = createAsyncThunk(
  "companies/search",
  async (id, thunkAPI) => {
    const response = await axios.post(host + "/corporation/search", id);
    return response.data;
  }
);

export const risk = createAsyncThunk("companies/risk", async (id, thunkAPI) => {
  // const response = await axios.post(
  //   host + "/corporation/risk",
  //   JSON.stringify(id)
  // );
  // console.log(response);
  // return response.data;
});

export const cluster = createAsyncThunk(
  "/corporation/cluster",
  async (id, thunkAPI) => {
    const response = await axios.post(
      host + "/corporation/cluster",
      // id
      { id: "535352782" }
    );
    return response.data;
  }
);

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(search.fulfilled, (state, action) => {
      state.profile = action.payload.data;
    });
    // builder.addCase(risk.fulfilled, (state, action) => {
    //   state.risk = action.payload.data;
    // });
    builder.addCase(cluster.fulfilled, (state, action) => {
      state.cluster = action.payload.data;
    });
  },
});

export const selectprofile = (state) => state.companies.profile;
export const selectrisk = (state) => state.companies.risk;
export const selectCluster = (state) => state.companies.cluster;

export default companiesSlice.reducer;
