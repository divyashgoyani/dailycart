import { createSlice } from "@reduxjs/toolkit";

const screenSlice = createSlice({
    name: "screen",
    initialState: { isMobile: window.innerWidth <= 430 },
    reducers: {
        updateScreenSize: (state, action) => {
            state.isMobile = action.payload <= 430;
        }
    }
});

export const { updateScreenSize } = screenSlice.actions;
export default screenSlice.reducer;