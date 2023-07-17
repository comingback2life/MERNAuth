import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({ baseUrl: '' });
const endpoints = (builder) => ({});
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints,
});
