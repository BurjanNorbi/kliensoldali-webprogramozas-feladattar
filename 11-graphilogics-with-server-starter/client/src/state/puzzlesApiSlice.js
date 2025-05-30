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
    login: build.mutation({
      query: ({ username: email, password }) => ({
        url: "authentication",
        method: "POST",
        body: {
          strategy: "local",
          email,
          password,
        },
      }),
    }),
  }),
});

// hooks
export const { useGetPuzzlesQuery, useLoginMutation } = puzzlesApi;
