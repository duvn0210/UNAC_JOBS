import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import vacantesReducer from "./vacantesSlice";
import postulacionesReducer from "./postulacionesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    vacantes: vacantesReducer,
    postulaciones: postulacionesReducer,
  },
});
