import { createSlice } from "@reduxjs/toolkit";
import { getAllData } from "./api";

const initialState = {
    data: '',
    status: '',
    error: ''
}

const httpGetAllDataSlice = createSlice({
    name: 'http-api',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getAllData.pending]: (state) => {
            state.status = 'pending'
        },
        [getAllData.fulfilled]: (state, action) => {
            state.status = 'success';
            state.data = action.payload;
            state.error = '';
        },
        [getAllData.rejected]: (state, action) => {
            state.status = 'error';
            state.data = '';
            state.error = action.error;
        }
    }
})

export default httpGetAllDataSlice.reducer