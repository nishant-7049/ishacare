import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createSession = createAsyncThunk(
  "createSession",
  async (sessionData) => {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const { data } = await axios.post("/api/session/new", sessionData, config);
    return data;
  }
);

export const getSession = createAsyncThunk("getSession", async (id) => {
  const config = {
    withCredentials: true,
  };
  const { data } = await axios.get(`/api/session/${id}`, config);
  return data;
});

const sessionSlice = createSlice({
  name: "sessionSlice",
  initialState: {
    loading: false,
    error: null,
    sessions: [],
    isCreated: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    resetIsCreated: (state) => {
      state.isCreated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createSession.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createSession.fulfilled, (state, action) => {
      state.loading = false;
      state.isCreated = action.payload.success;
    });
    builder.addCase(createSession.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getSession.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSession.fulfilled, (state, action) => {
      state.loading = false;
      state.sessions = action.payload.sessions;
    });
    builder.addCase(getSession.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearError } = sessionSlice.actions;
export default sessionSlice.reducer;
