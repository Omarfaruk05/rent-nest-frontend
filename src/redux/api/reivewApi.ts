import { IHouse, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const BASE_URL = "/reviews";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addReview: build.mutation({
      query: (data) => ({
        url: BASE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.review],
    }),

    getReviews: build.query({
      query: (arg: Record<string, any>) => ({
        url: BASE_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          reviews: response,
          meta,
        };
      },
      providesTags: [tagTypes.review],
    }),
    getSingleReview: build.query({
      query: (id) => ({
        url: `${BASE_URL}/:${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    updateReview: build.mutation({
      query: (data) => ({
        url: `${BASE_URL}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
    }),
    deleteReview: build.mutation({
      query: (id) => ({
        url: `${BASE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetReviewsQuery,
  useGetSingleReviewQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
