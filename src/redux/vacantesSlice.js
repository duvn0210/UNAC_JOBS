import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Obtener vacantes
export const getVacantes = createAsyncThunk(
  "vacantes/getVacantes",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token || localStorage.getItem("token");

      const response = await axios.get("http://localhost:5500/api/vacantes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return rejectWithValue("Token inválido o no enviado");
      }
      return rejectWithValue("Error al obtener vacantes");
    }
  }
);

// ✅ Crear vacante (POST)
export const createVacante = createAsyncThunk(
  "vacantes/createVacante",
  async (newVacante, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token || localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:5500/api/vacantes",
        newVacante,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch {
      return rejectWithValue("Error al crear la vacante");
    }
  }
);

export const updateVacante = createAsyncThunk(
  "vacantes/updateVacante",
  async ({ id, updatedData }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token || localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:5500/api/vacantes/${id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch {
      return rejectWithValue("Error al actualizar la vacante");
    }
  }
);


export const deleteVacante = createAsyncThunk(
  "vacantes/deleteVacante",
  async (id, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token || localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:5500/api/vacantes/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return { id, ...response.data };
    } catch {
      return rejectWithValue("Error al eliminar la vacante");
    }
  }
);


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
      // GET
      .addCase(getVacantes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVacantes.fulfilled, (state, action) => {
        state.loading = false;
        state.vacantes = action.payload.data;
      })
      .addCase(getVacantes.rejected, (state) => {
        state.loading = false;
        state.error = "Error al cargar vacantes";
      })
      // POST
      .addCase(createVacante.fulfilled, (state, action) => {
        state.vacantes.push(action.payload.data); // Agrega la nueva vacante al estado
      })
       // PUT
    .addCase(updateVacante.fulfilled, (state, action) => {
      const index = state.vacantes.findIndex(
        (v) => v.id === action.payload.data.id
      );
      if (index !== -1) state.vacantes[index] = action.payload.data;
    })
    // DELETE
    .addCase(deleteVacante.fulfilled, (state, action) => {
      state.vacantes = state.vacantes.filter((v) => v.id !== action.payload.id);
    });
  },
});

export default vacantesSlice.reducer;
