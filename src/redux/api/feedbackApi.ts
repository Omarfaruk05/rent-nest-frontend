import { IHouse, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const BASE_URL = "/feedbacks";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addFeedback: build.mutation({
      query: (data) => ({
        url: BASE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),

    getFeedbacks: build.query({
      query: (arg: Record<string, any>) => ({
        url: BASE_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response, meta: IMeta) => {
        return {
          feedbacks: response,
          meta,
        };
      },
      providesTags: [tagTypes.review],
    }),
    getSingleFeedback: build.query({
      query: (id) => ({
        url: `${BASE_URL}/:${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    updateFeedback: build.mutation({
      query: (data) => ({
        url: `${BASE_URL}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
    }),
    deleteFeedback: build.mutation({
      query: (id) => ({
        url: `${BASE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useAddFeedbackMutation,
  useGetFeedbacksQuery,
  useGetSingleFeedbackQuery,
  useUpdateFeedbackMutation,
  useDeleteFeedbackMutation,
} = feedbackApi;
