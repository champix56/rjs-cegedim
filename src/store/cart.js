import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
}

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add:(state,action) => {
        let produit =  state.items.find(e=>e.id===action.payload.id)
        produit?produit.quantite++:state.items.push({...action.payload,quantite:1});
    },
    remove:(state,action)=>{
        let produit =  state.items.find(e=>e.id===action.payload.id)
        if(produit){produit.quantite--;}
    }
  }
});

export const {remove,add} = cart.actions

export default cart.reducer