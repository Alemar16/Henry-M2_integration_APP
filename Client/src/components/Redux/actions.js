import axios from "axios";
import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./action.types";
const endpoint = "http://localhost:3001/rickandmorty/fav";

// -----actions creators -------------------------

//=============METODO CON ASYNC AWAIT===================================
  export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFavorite = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${endpoint}/${id}`);
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};  

//================CON EXPRESS Y PROMESAS================================
/* export const addFavorite = (character) => {
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    });
  };
};

export const removeFavorite = (id) => {
  return (dispatch) => {
    axios.delete(`${endpoint}/${id}`).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    });
  };
};  */ 

//===========METODO ANTERIOR SIN EXPRESS=================

/* export const addFavorite = (character) => {
  return {type: ADD_FAVORITE, payload: character }
} */


/* export const removeFavorite = (id) => {
  return{ type: REMOVE_FAVORITE, payload: id}
} */
//=======================================================


export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
