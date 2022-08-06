import { createAsyncThunk } from "@reduxjs/toolkit";
const API = 'https://jsonblob.com/api/jsonBlob/1003972010275258368';

export const getAllData = createAsyncThunk('', async () => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
})
