import { IHouse, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const BASE_URL = "/blogs";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBlog: build.mutation({
      query: (data) => ({
        url: BASE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),

    getBlogs: build.query({
      query: (arg: Record<string, any>) => ({
        url: BASE_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response, meta: IMeta) => {
        return {
          blogs: response,
          meta,
        };
      },
      providesTags: [tagTypes.blog],
    }),
    getSingleBlog: build.query({
      query: (id) => ({
        url: `${BASE_URL}/:${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    updateBlog: build.mutation({
      query: (data) => ({
        url: `${BASE_URL}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
    }),
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `${BASE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useAddBlogMutation,
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} = blogApi;
