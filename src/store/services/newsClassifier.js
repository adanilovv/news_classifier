import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsClassifierApi = createApi({
  reducerPath: "newsClassifierApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_NGROK_URL,
  }),
  endpoints: (builder) => ({
    postArticle: builder.query({ query: (body) => ({ body, method: "POST" }) }),
  }),
});

export const { usePostArticleQuery } = newsClassifierApi;
