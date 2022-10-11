
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import stockReducer, { fetchAllStock } from './stock'


const store = configureStore({
    reducer: combineReducers({ cart: cartReducer, stock: stockReducer })
})
store.dispatch(fetchAllStock());
export default store;