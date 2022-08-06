import { configureStore } from "@reduxjs/toolkit";
import httpApiSlice from './actionHttp';
import handleUser from "./actionUser";
import handleOrderCart from './actionHandleCart';


const store = configureStore({
    reducer: {
        httpData: httpApiSlice,
        orderCart: handleOrderCart,
        dataUser: handleUser
    }
})

export default store;