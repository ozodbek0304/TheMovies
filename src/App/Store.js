import {configureStore} from "@reduxjs/toolkit";
import  cardSilce  from "../Store/index";

export const store = configureStore({
    reducer:{
        card:cardSilce
    }
})