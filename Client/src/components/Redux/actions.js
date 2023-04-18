import axios from "axios";
import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./action.types";
const endpoint = "http://localhost:3001/rickandmorty/fav";

// -----actions creators -------------------------
//metodo anterior sin Express
/* export const addFavorite = (character) => {
  return {type: ADD_FAVORITE, payload: character }
} */

// CON EXPRESS
export const addFavorite = (character) => {
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    });
  };
};

//Metodo anterior sin Express
/* export const removeFavorite = (id) => {
  return{ type: REMOVE_FAVORITE, payload: id}
} */

export const removeFavorite = (id) => {
  return (dispatch) => {
    axios.delete(`${endpoint}/${id}`).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    });
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
