import { configureStore } from "@reduxjs/toolkit";
import { UserListReducer } from "./slices/userSlice";
import { albumApi } from "./thunks/albumApi";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store=configureStore({
   reducer:{
        users:UserListReducer,
        [albumApi.reducerPath]:albumApi.reducer
   },
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(albumApi.middleware);
    },
})

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUsers";
export * from "./thunks/removeUsers";
export { useFetchAlbumsQuery, useAddAlbumsMutation } from "./thunks/albumApi";