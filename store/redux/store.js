import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./favoritesSlices";


const store = configureStore({
  reducer:{
    favorites: favoritesReducer
  }
})

export default store;

