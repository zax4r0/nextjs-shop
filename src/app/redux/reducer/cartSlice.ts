import { createSlice } from "@reduxjs/toolkit";
// import {tost} from 'react-tostify'

const initialState = {
    CartItem:
        typeof window !== "undefined" && localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
    cartTotalQuanitity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.CartItem.findIndex(
                item => item.id === action.payload.id
                // toString.info(`Added aother ${ state.CartItem.findIndex(item)=>item.name }`){
                //   posttion;"bottemleft"
                // }
            );
            if (itemIndex >= 0) {
                state.CartItem[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.CartItem.push(tempProduct);
                // toString.succes(`${ action.payload.name } Added a new product one`){
                //   posttion;"bottemleft"
                // }
            }
            if (typeof window !== "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(state.CartItem));
            }
        },

        removeFromCart(state, action) {
            const nextCartItems = state.CartItem.filter(
                cartItem => cartItem.id !== action.payload.id
                // toString.info(`removed ${ state.CartItem.filter(item)=>item.name }`){
                //   posttion;"bottemleft"
                // }
            );
            state.CartItem = nextCartItems;
            if (typeof window !== "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(state.CartItem));
            }
        },
        decreesCountCart(state, action) {
            const itemIndex = state.CartItem.findIndex(
                item => item.id === action.payload.id
                // toString.info(`Added aother ${ state.CartItem.findIndex(item)=>item.name }`){
                //   posttion;"bottemleft"
                // }
            );
            if (state.CartItem[itemIndex].cartQuantity > 1) {
                state.CartItem[itemIndex].cartQuantity -= 1;
            } else if (state.CartItem[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.CartItem.filter(
                    cartItem => cartItem.id !== action.payload.id
                    // toString.info(`removed ${ state.CartItem.filter(item)=>item.name }`){
                    //   posttion;"bottemleft"
                    // }
                );
                state.CartItem = nextCartItems;
                // toString.succes(`${ action.payload.name } Added a new product one`){
                //   posttion;"bottemleft"
                // }
            }
            if (typeof window !== "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(state.CartItem));
            }
        },
        clearCart(state) {
            state.CartItem = [];
            if (typeof window !== "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(state.CartItem));
            }
        },
        getTotals(state) {
            let { total, quantity } = state.CartItem.reduce(
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
            state.cartTotalQuanitity = quantity;
            state.cartTotalAmount = total;
        },
    },
});

export const { addToCart, getTotals, clearCart, removeFromCart, decreesCountCart } =
    cartSlice.actions;
export default cartSlice.reducer;
