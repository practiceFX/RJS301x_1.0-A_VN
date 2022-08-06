import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    product: [
        // id: dataDetail[0]._id['$oid'],
        // name: dataDetail[0].name,
        // price: dataDetail[0].price,
        // category: dataDetail[0].category,
        // img:
        // short_des: dataDetail[0].short_des,
        // long_des: dataDetail[0].long_des,
        // amount: amount
        //user:
    ]
}


const dataOrder = JSON.parse(localStorage.getItem('order'));

dataOrder != null ? initialState.product = dataOrder : initialState.product = [];


const handleOrderCart = createSlice({
    name: 'Order-Cart',
    initialState,
    reducers: {
        ADD_CART: (state, action) => {
            state.product = [
                ...state.product, action.payload
            ]
            localStorage.setItem('order', JSON.stringify(state.product));

        },
        UPDATE_CART: (state, action) => {
            state.product = action.payload;
            localStorage.setItem('order', JSON.stringify(state.product))
        },
        DELETE_CART: (state, action) => {
            state.product.splice(action.payload, 1);
            localStorage.setItem('order', JSON.stringify(state.product))
        }
    }

})
export const handleOrderCartAction = handleOrderCart.actions;
export default handleOrderCart.reducer