// import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from './features/userSlice'

// export const store = configureStore({
//     reducer: {
//         counter: counterSlice
//     },
// })

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/userSlice"
// jab export default hota haa toh kohi bhi name dy sakhty hein
export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})