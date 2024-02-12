import { createSlice } from "@reduxjs/toolkit";

interface ISearchAndFilterState {
  searchTerm: string;
  propertyType: string;
  interior: string;
  gas: string;
  status: string;
  bedrooms: number | undefined;
}

const initialState: ISearchAndFilterState = {
  searchTerm: "",
  propertyType: "",
  interior: "",
  gas: "",
  status: "",
  bedrooms: undefined,
};

const searchAndFilterSlice = createSlice({
  name: "searchAndFilter",
  initialState,
  reducers: {
    searchTerm: (state, actions) => {
      state.searchTerm = actions.payload;
    },
    propertyType: (state, actions) => {
      state.propertyType = actions.payload;
    },
    interior: (state, actions) => {
      state.interior = actions.payload;
    },
    status: (state, actions) => {
      state.status = actions.payload;
    },
    gas: (state, actions) => {
      state.gas = actions.payload;
    },
    bedrooms: (state, actions) => {
      state.bedrooms = actions.payload;
    },
  },
});

export const { searchTerm, propertyType, interior, status, gas, bedrooms } =
  searchAndFilterSlice.actions;
export default searchAndFilterSlice.reducer;
