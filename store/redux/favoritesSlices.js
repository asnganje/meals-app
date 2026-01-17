import { createSlice } from "@reduxjs/toolkit";


const favoritesSlice = createSlice({
  name: "favorites",
  initialState:{
    favMealIds: []
  },
  reducers:{
    addFavorite:(state, action)=> {
      state.favMealIds = [action.payload, ...state.favMealIds] 
    },
    removeFavorite:(state, action) => {
      state.favMealIds = state.favMealIds.filter((id)=> id !== action.payload)
    }
  }
})

export const favoritesReducer = favoritesSlice.reducer;
export const {addFavorite, removeFavorite} = favoritesSlice.actions;
