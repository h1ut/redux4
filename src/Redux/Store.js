import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './cartSlice'

const store = configureStore({
    reducer: {
        cart: cartReduser,
    },
        middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck : false,
        }),
});
export default store