import { IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addUser: build.mutation({
      query: (data) => ({
        url: USER_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    getUsers: build.query({
      query: (arg: Record<string, any>) => ({
        url: USER_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response, meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
    getSingUser: build.query({
      query: () => ({
        url: `${USER_URL}/user`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateMyProfile: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/update-profile`,
        method: "PATCH",
        data: data,
      }),
    }),
    makeAdmin: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetSingUserQuery,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateMyProfileMutation,
  useMakeAdminMutation,
} = userApi;
