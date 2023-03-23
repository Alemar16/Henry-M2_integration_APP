import { ADD_FAVORITE, REMOVE_FAVORITE,FILTER, ORDER } from "./action.types";

// -----actions creators -------------------------
export const addFavorite = (character) => {
  return {type: ADD_FAVORITE, payload: character }
}
export const removeFavorite = (id) => {
  return{ type: REMOVE_FAVORITE, payload: id}
}
export const filterCards = (gender) => {
  return{type: FILTER, payload: gender}
}
export const orderCards = (id) => {
  return{type: ORDER, payload: id}
}