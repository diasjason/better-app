import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const addressApiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "47d586b7admshb7cbdcc1b180a3ap133a2bjsnff529fa39da3",
};

const baseUrl = "https://addressservice-int-app-service.azurewebsites.net";

const createRequest = (url) => ({ url, headers: addressApiHeaders });

export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAddress: builder.query({
      query: ({ searchString }) =>
        createRequest(`/api/Address/1/${searchString}/`),
    }),
  }),
});

export const { useGetAddressQuery } = addressApi;
