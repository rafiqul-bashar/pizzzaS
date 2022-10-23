import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

// const initialState = {
//     cartItems: localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [],
//   cartTotalQuantity: localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartQuantity"))
//     : 0,
//   cartTotalAmount: 0,
// };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload };
        state.cartItems.push(tempProductItem);
        state.cartTotalQuantity = state.cartTotalQuantity + 1;
      }
      //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      //   localStorage.setItem(
      //     "cartQuantity",
      //     JSON.stringify(state.cartTotalQuantity)
      //   );
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartTotalQuantity--;
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem._id == action.payload._id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item._id != cartItem._id
          );
          state.cartItems = nextCartItems;
          state.cartTotalQuantity = state.cartTotalQuantity - 1;
        }

        return state;
      });
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
    },
    getTotals(state) {
      let { total } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmount = total;
    },
  },
});

export const selectCart = (state) => state.cart;
export const { getTotals, addToCart, decreaseCart, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
