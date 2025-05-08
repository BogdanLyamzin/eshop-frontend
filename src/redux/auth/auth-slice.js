import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    loading: null,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
});

export default authSlice.reducer;