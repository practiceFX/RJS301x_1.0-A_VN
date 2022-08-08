import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [
        {
            fullname: 'John',
            nameUser: 'John',
            passUser: 'John123',
            phone: '12121'
        }
    ],
    onLogin: [
        { user: '' }
    ]

}
const dataUser = JSON.parse(localStorage.getItem('user'));
const dataOnLogin = JSON.parse(localStorage.getItem('on_login'));
dataUser != null ? initialState.users = dataUser : initialState.users = [];
dataOnLogin != null ? initialState.onLogin = dataOnLogin : initialState.onLogin = [];
const handleUser = createSlice({
    name: 'auth-user',
    initialState,
    reducers: {
        ADD_USER: (state, action) => {
            state.users = [...state.users, action.payload]
            localStorage.setItem('user', JSON.stringify(state.users))
        },
        ON_LOGIN: (state, action) => {
            state.onLogin = action.payload;
            localStorage.setItem('on_login', JSON.stringify(state.onLogin));
        },
        ON_LOGOUT: (state) => {
            state.onLogin = [];
            localStorage.removeItem('on_login');
        }
    }
})

export const handleUserAction = handleUser.actions;
export default handleUser.reducer
