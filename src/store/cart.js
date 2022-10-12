import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  items: [],
}
const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      let produit = state.items.find(e => e.id === action.payload.id)
      produit ? produit.quantite++ : state.items.push({ ...action.payload, quantite: 1 });
    },
    remove: (state, action) => {
      let produit_index = state.items.findIndex(e => e.id === action.payload.id)
      if (produit_index > -1 && state.items[produit_index].quantite > 1) { state.items[produit_index].quantite--; }
      else if (produit_index > -1 && state.items[produit_index].quantite <= 1) {
        state.items.splice(produit_index,1);
        //state.items = [...state.items.slice(0, produit_index), ...state.items.slice(produit_index + 1)]
        //del(state,action);
      }
    },
    del: (state, action) => {
      let produit_index = state.items.findIndex(e => e.id === action.payload.id)
      if (produit_index > -1) {
        state.items.splice(produit_index, 1);

        //        state.items = [...state.items.slice(0, produit_index), ...state.items.slice(produit_index + 1)] *
      }
    }
  }
});

export const { remove, add, del } = cart.actions

export default cart.reducer