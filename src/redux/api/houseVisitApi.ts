import { IHouse, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const BASE_URL = "/house-visits";

export const visitHouseApi: any = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addHouseVisit: build.mutation({
      query: (data) => ({
        url: BASE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.visit],
    }),

    getHousevisits: build.query({
      query: () => ({
        url: BASE_URL,
        method: "GET",
      }),
      providesTags: [tagTypes.visit],
    }),

    getAvailableSlot: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${BASE_URL}/slots`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.visit],
    }),
    deleteHouseVisit: build.mutation({
      query: (id) => ({
        url: `${BASE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.visit],
    }),
  }),
});

export const {
  useAddHouseVisitMutation,
  useGetAvailableSlotQuery,
  useGetHousevisitsQuery,
  useDeleteHouseVisitMutation,
} = visitHouseApi;
