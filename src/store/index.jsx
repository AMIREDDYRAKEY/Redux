import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
 import { UserSlice } from './UserSlice'
const index =configureStore({
    reducer:{
        users:UserSlice,
    },
})
export default index;