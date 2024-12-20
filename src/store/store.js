import { configureStore } from "@reduxjs/toolkit";
import { quotesReducer } from "../slice/quoteSlice";


export const store = configureStore({
    reducer: {
        quotes : quotesReducer,
    },
});