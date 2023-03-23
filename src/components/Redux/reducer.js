import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./action.types.js";


const initialState = {
  myFavorites: [],
  allCharacters: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const addFavorite = [...state.allCharacters, action.payload]
      return {
        ...state,
        myFavorites: [...addFavorite], 
        allCharacters: [...addFavorite],
      };

    case REMOVE_FAVORITE:
      const removeFavorite = state.allCharacters.filter(e => e.id !== action.payload)
      return {
        ...state,
        myFavorites: [...removeFavorite],
        allCharacters: [...removeFavorite],
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(e => e.gender === action.payload),
      };

    case ORDER:
      let sortedCharacters;
        if (action.payload === "Ascendente") {
          sortedCharacters = state.myFavorites.sort((a, b) => a.id > b.id ? 1 : -1);
        } else {
          sortedCharacters = state.myFavorites.sort((a, b) => a.id < b.id ? 1 : -1);
        }
      return {
        ...state,
        myFavorites: [...sortedCharacters],
      };
    
    case 'RESET':
      return {
        ...state,
        myFavorites: state.allCharacters,
      }

    default:
      return state ;
  }

}

export default rootReducer;