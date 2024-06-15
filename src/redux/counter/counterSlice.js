import { createSlice, nanoid } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const initialState = {
  cart: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addtoCart: (state, action) => {
      const itemExists = state.cart.some(
        (cartItem) => cartItem.index === action.payload.index
      );

      if (itemExists) {
        toast.error("Already Added");
      } else {
        if (state.cart.length < 4) {
          const { text, price, index, logo } = action.payload;
          const ite = {
            id: nanoid(),
            text: text,
            price: price,
            index: index,
            logo: logo,
          };
          state.cart.push(ite);
          toast.success("Successfully Added", {
            autoClose: 5000, // Toast will auto-close after 5 seconds
            closeOnClick: true, // Toast will close when clicked
            hideProgressBar: false, // Show progress bar
            pauseOnHover: true, // Pause the timer on hover
            draggable: true, // Allow dragging to close
            position: "top-center" // Position of the toast
          })


        } else {
          Swal.fire({
            icon: "error",
            text: "Your Cart is full!",
          });
        }
      }
    },
    deleteItemsCart: (state, action) => {
      state.cart = state.cart.filter((cart) => cart.id != action.payload);
      console.log(state.cart);
    },
    deleteall: (state) => {
      state.cart = [];
    },
  },
});

export const { addtoCart, deleteItemsCart, deleteall } = counterSlice.actions;

export default counterSlice.reducer;
