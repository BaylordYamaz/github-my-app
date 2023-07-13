import { configureStore } from '@reduxjs/toolkit'
import  useReducer  from './useSlice'
import counterReducer from '../counter/counterSlice'
import { cartReducer } from './cartSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
user:useReducer,
cart:cartReducer
  }
})