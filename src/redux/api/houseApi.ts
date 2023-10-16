import { IHouse, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const BASE_URL = "/houses";

export const houseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addHouse: build.mutation({
      query: (data) => ({
        url: BASE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.house],
    }),

    getHouses: build.query({
      query: (arg: Record<string, any>) => ({
        url: BASE_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IHouse[], meta: IMeta) => {
        return {
          houses: response,
          meta,
        };
      },
      providesTags: [tagTypes.house],
    }),
    getSingHouse: build.query({
      query: (id) => ({
        url: `${BASE_URL}/:${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.house],
    }),
    updateHouse: build.mutation({
      query: (data) => ({
        url: `${BASE_URL}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
    }),
    deleteHouse: build.mutation({
      query: (id) => ({
        url: `${BASE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.house],
    }),
  }),
});

export const {
  useAddHouseMutation,
  useGetHousesQuery,
  useGetSingHouseQuery,
  useUpdateHouseMutation,
  useDeleteHouseMutation,
} = houseApi;
