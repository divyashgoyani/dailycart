import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./slices/screenSlice.js";

const store = configureStore({
    reducer: {
        screen: screenReducer
    }
});

export default store;