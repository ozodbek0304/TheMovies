import {configureStore} from "@reduxjs/toolkit";
import  cardSilce  from "../Store/index";
import  cardSilceWatching  from "../Store/indexWatching";

export const store = configureStore({
    reducer:{
        card:cardSilce,
        watching:cardSilceWatching,
    }
})