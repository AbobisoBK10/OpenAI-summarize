import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

//store is a global state that saves the entire state of the article
export const store = configureStore({
    //in most cases you don't need the entire state you need to reduce it to have a slice which is going to be the articleAPI
    reducer: {
        [articleApi.reducerPath]:articleApi.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(articleApi.middleware)
});