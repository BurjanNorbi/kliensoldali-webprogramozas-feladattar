import { configureStore } from "@reduxjs/toolkit";
import { nonogramReducer } from "./nonogramSlice";
import { listReducer } from "./listSlice";
import { puzzlesApi } from "./puzzlesApiSlice";

export const store = configureStore({
  reducer: { nonogram: nonogramReducer, list: listReducer, [puzzlesApi.reducerPath]: puzzlesApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(puzzlesApi.middleware),
});
