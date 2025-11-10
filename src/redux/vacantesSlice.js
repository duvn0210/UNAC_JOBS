import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getVacantes = createAsyncThunk("vacantes/getVacantes", async () => {
  const response = await axios.get("http://localhost:4000/vacantes");
  return response.data;
});

const vacantesSlice = createSlice({
  name: "vacantes",
  initialState: {
    vacantes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVacantes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVacantes.fulfilled, (state, action) => {
        state.loading = false;
        state.vacantes = action.payload;
      })
      .addCase(getVacantes.rejected, (state) => {
        state.loading = false;
        state.error = "Error al cargar vacantes";
      });
  },
});

export default vacantesSlice.reducer;
