
import {configureStore} from "@reduxjs/toolkit"


import productSlice from '../Redux/productSlice'

export const store = configureStore({
    reducer:{
        products: productSlice,
  
    },
})

