// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030";

// Define a service using a base URL and expected endpoints
export const puzzlesApi = createApi({
  reducerPath: "puzzlesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPuzzles: builder.query({
      query: () => `/puzzles`,
      transformResponse: (res) => res.data,
    }),
  }),
});

export const { useGetPuzzlesQuery } = puzzlesApi;
