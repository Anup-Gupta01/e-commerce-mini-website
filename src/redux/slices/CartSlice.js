import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            console.log("Reducer ADD called:", action.payload); // ✅ Debug log
            return [...state, action.payload]; // ✅ Return a NEW state array
        },
        remove: (state, action) => {
            console.log("Reducer REMOVE called:", action.payload); // ✅ Debug log
            return state.filter((item) => item.id !== action.payload);
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
