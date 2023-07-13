
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    //thêm sản phẩm vào mảng cart ,
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      // nếu sản phẩm đã tồn tại thì sẽ tăng số lượng 
      if (itemInCart) {
        itemInCart.quantity++;
      }
      // còn chưa có sẽ thêm trạng thái 
      else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    // nhận id sản phấm đó r tăng số lượng lên 1
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    //giảm số lượng sản phẩm khi lớn hơn 1
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    //nhận id sản phẩm đó r xóa khỏi mảng
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;