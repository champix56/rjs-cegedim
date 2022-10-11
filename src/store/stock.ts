import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import I_Item from "../interfaces/Item";

interface storeStock {
  items: Array<I_Item>;
  loading: "idle" | "pending" | "succeeded" | "failed";
}
const initialState: storeStock = {
  items: [],
  loading: "idle",
};
export const fetchAllStock = createAsyncThunk("stock/fetchAll", async () => {
  const response = await fetch("http://localhost:7956/produits");
  return response.json();
});
const stock = createSlice({
  name: "stock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllStock.fulfilled, (state, action) => {
      // Add user to the state array
      state.items.splice(0);
      state.items.push(...action.payload)
    });
  },
});



export default stock.reducer;
