import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030/";

export const puzzlesApi = createApi({
  reducerPath: "puzzlesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getPuzzles: build.query({
      query: () => "puzzles",
      transformResponse: (res) => res.data,
    }),
  }),
});

// hooks
export const { useGetPuzzlesQuery } = puzzlesApi;
