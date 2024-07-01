import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overview: "",
};

export const sitemapOverviewBd = createSlice({
  name: "proposedSitemapOverviewBd",
  initialState,
  reducers: {
    setSiteMapOverviewBd: (state, action) => {
      state.overview = action.payload;
    },
  },
});

export const { setSiteMapOverviewBd } = sitemapOverviewBd.actions;

export default sitemapOverviewBd.reducer;