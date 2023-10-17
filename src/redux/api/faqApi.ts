import { IHouse, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const BASE_URL = "/faqs";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addFAQ: build.mutation({
      query: (data) => ({
        url: BASE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),

    getFAQ: build.query({
      query: (arg: Record<string, any>) => ({
        url: BASE_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response, meta: IMeta) => {
        return {
          faq: response,
          meta,
        };
      },
      providesTags: [tagTypes.faq],
    }),
    getSingleFAQ: build.query({
      query: (id) => ({
        url: `${BASE_URL}/:${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),
    updateFAQ: build.mutation({
      query: (data) => ({
        url: `${BASE_URL}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
    }),
    deleteFAQ: build.mutation({
      query: (id) => ({
        url: `${BASE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const {
  useAddFAQMutation,
  useGetFAQQuery,
  useGetSingleFAQQuery,
  useUpdateFAQMutation,
  useDeleteFAQMutation,
} = faqApi;
