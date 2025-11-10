import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import vacantesReducer from "./vacantesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    vacantes: vacantesReducer,
  },
});
