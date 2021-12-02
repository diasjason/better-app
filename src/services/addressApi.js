import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const addressApiHeaders = {};

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
    // getAddressAutoComplete: builder.query()
  }),
});

export const { useGetAddressQuery } = addressApi;
