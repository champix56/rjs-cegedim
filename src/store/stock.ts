import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import I_Item from '../interfaces/Item';

interface I_StockState{
    items:Array<I_Item>,
    loading:'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState:I_StockState = {
    items:[],
    loading:'idle'
}
const REST_ADR="http://localhost:7000"
export const fetchAllStock=createAsyncThunk('stock/fetchAll',async()=>{
   const response= await fetch(`${REST_ADR}/produits`)
   return (await response.json());
})
const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
      builder.addCase(fetchAllStock.fulfilled,(state:I_StockState,payload)=>{
       console.log('%c%s','font-size:24pt;color:red','Retour de fetch')
        console.log(payload.payload );   
         state.items.push(...payload.payload)
      })
  },
});

//export const {} = stockSlice.actions

export default stockSlice.reducer