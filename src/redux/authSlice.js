import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = "http://localhost:5500/api/users/login";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ nombre, apellido, email, password, rol }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5500/api/users/register",
        { nombre, apellido, email, password, rol },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Cuenta creada con éxito",
          showConfirmButton: false,
          timer: 1500,
        });
        return data;
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al registrar",
          text: data.message || "Intente de nuevo",
        });
        return rejectWithValue(data.message);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error en el registro",
        text: error.response?.data?.message || "Intente de nuevo",
      });
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        API_URL,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      const data = response.data;

      if (data.success) {
        const { token, user } = data.data; // 👈 accedemos correctamente a data.data

        localStorage.setItem("token", token);

        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          showConfirmButton: false,
          timer: 1500,
        });

        return { user, token }; // retornamos bien los datos
      } else {
        Swal.fire({
          icon: "error",
          title: "Credenciales incorrectas",
        });
        return rejectWithValue("Credenciales inválidas");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: error.response?.data?.message || "Intente de nuevo",
      });
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // 👈 Guarda solo el usuario
        state.token = action.payload.token; // (opcional, pero recomendable)
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
