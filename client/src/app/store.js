import {configureStore} from '@reduxjs/toolkit';
import userReducers from "../features/userSlice.js"
const store = configureStore({
    reducer:userReducers
})

export default store