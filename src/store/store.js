
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import stockReducer, { fetchAllStock } from './stock'
const initialState = { message: '', isOpen: false }

const reducerModal = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'modal/open':
            return { ...state, message: payload, isOpen: true }
        case 'modal/close':
            return { ...state, message: '', isOpen: false }
        default:
            return state
    }
}


const store = configureStore({
    reducer: combineReducers({ cart: cartReducer, stock: stockReducer, modal:reducerModal })
})
store.dispatch(fetchAllStock());
export default store;