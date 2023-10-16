import { IHouse, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const BASE_URL = "/bookings";

export const houseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBooking: build.mutation({
      query: (data) => ({
        url: BASE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    getBookings: build.query({
      query: (arg: Record<string, any>) => ({
        url: BASE_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response, meta: IMeta) => {
        return {
          bookings: response,
          meta,
        };
      },
      providesTags: [tagTypes.booking],
    }),
    getSingBooking: build.query({
      query: (id) => ({
        url: `${BASE_URL}/:${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    updateBooking: build.mutation({
      query: (data) => ({
        url: `${BASE_URL}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    deleteBooking: build.mutation({
      query: (id) => ({
        url: `${BASE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useGetBookingsQuery,
  useGetSingBookingQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = houseApi;
