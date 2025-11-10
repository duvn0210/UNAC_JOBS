import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Crear nueva postulación
export const createPostulacion = createAsyncThunk(
  "postulaciones/createPostulacion",
  async ({ vacanteId, informacion }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token || localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:5500/api/postulaciones",
        { vacante: vacanteId, informacion },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error al crear la postulación"
      );
    }
  }
);

const postulacionesSlice = createSlice({
  name: "postulaciones",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPostulacion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPostulacion.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createPostulacion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postulacionesSlice.reducer;
