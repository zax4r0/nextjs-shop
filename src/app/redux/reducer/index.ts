import { combineReducers } from "@reduxjs/toolkit";

import products from "./productsSlice";
import cart from "./cartSlice";

export default combineReducers({ products, cart });
