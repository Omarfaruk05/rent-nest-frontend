import { IHouse, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const BASE_URL = "/carts";

export const savedHouseApi: any = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addToCart: build.mutation({
      query: (data) => ({
        url: BASE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.saved],
    }),

    getSavedHouses: build.query({
      query: (arg: Record<string, any>) => ({
        url: BASE_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response, meta: IMeta) => {
        return {
          savedHouses: response,
          meta,
        };
      },
      providesTags: [tagTypes.saved],
    }),
    getSingSavedHouse: build.query({
      query: (id) => ({
        url: `${BASE_URL}/:${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.saved],
    }),
    updateSavedHouse: build.mutation({
      query: (data) => ({
        url: `${BASE_URL}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
    }),
    deleteSavedHouse: build.mutation({
      query: (id) => ({
        url: `${BASE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.saved],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetSavedHousesQuery,
  useGetSingSavedHouseQuery,
  useUpdateSavedHouseMutation,
  useDeleteSavedHouseMutation,
} = savedHouseApi;
