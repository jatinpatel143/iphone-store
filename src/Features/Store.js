import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './Productslice'
const store = configureStore({
    reducer :{
    product : ProductReducer
    },
})  

export default store