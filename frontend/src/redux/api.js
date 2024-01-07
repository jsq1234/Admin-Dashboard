import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const serverUrl = "http://localhost:8000";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: serverUrl }),
  tagTypes: ["Products", "Customers", "Transactions", "Sales"],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "/api/products",
      providesTags: (result, err, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Products", id })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),
    getProduct: build.query({
      query: (id) => `api/products/${id}`,
      providesTags: (result, err, id) => [{ type: "Products", id }],
    }),
    addProduct: build.mutation({
      query(body) {
        return { url: `/api/products`, method: "POST", body };
      },
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),

    getCustomers: build.query({
      query: () => "/api/users",
      providesTags: (result, err, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Customers", id })),
              { type: "Customers", id: "LIST" },
            ]
          : [{ type: "Customers", id: "LIST" }],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "/api/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: (result, err, arg) =>
        result
          ? [
              ...result["transactions"].map(({ id }) => ({
                type: "Transactions",
                id,
              })),
              { type: "Transactions", id: "LIST" },
            ]
          : [{ type: "Transactions", id: "LIST" }],
    }),
    getSales: build.query({
      query: () => "/api/sales",
      providesTags: ["Sales"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetSalesQuery,
} = api;
