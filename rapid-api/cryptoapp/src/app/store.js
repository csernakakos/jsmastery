import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";

// Create a store, add the API to the store:
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer
    },
});