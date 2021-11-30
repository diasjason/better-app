import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cRENewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "47d586b7admshb7cbdcc1b180a3ap133a2bjsnff529fa39da3",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cRENewsHeaders });

export const cRENews = createApi({
  reducerPath: "creNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCRENews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCRENewsQuery } = cRENews;
