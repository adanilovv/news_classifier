import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { newsClassifierApi } from "./services/newsClassifier";

export const store = configureStore({
    reducer: {
        [newsClassifierApi.reducerPath]: newsClassifierApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(newsClassifierApi.middleware)
});

setupListeners(store.dispatch);
