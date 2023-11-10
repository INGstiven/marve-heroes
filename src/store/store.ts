import { combineReducers, configureStore } from "@reduxjs/toolkit";
import heroes from "./slices/heroes";
import search from "./slices/search";

export const store = configureStore({
    reducer: combineReducers({
        heroes,
        search
    })
})

store.subscribe(() => {
    
})