// import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import {
	ActionCreator,
	PayloadAction,
	ThunkAction,
	configureStore,
	createSlice,
} from "@reduxjs/toolkit";
import {
  GET_POKEMONLIST,
  INCREMENT_POKEMON_OFFSET,
  DECREMENT_POKEMON_OFFSET,
  POKEMON_DETAIL,
  CLEAR_POKEMON_DETAIL,
} from './action';



export interface State {
  offset: number;
  pokemon: any;
}

const initialState = {
  offset: 5,
  pokemon: {
    count: 0,
    next: '',
    previous: '',
    results: null,
  },
  pokemonDetail: null,
}
//change to combined reducer
export const pokemonSlice = (
  state: State = initialState,
  action: any,
) => {
  // console.log('reducer', action.type, action.payload);
  // console.log('numberSlice', action);
  switch (action.type) {
    case GET_POKEMONLIST:
      // console.log('GET_POKEMONLIST', action.payload);
      return { 
        ...state, 
        pokemon: action.payload,
        offset: action.payload.results.length,
      };
    case POKEMON_DETAIL:
      // console.log('POKEMON_DETAIL', action.payload);
      return { 
        ...state, 
        pokemonDetail: action.payload,
      };
    case CLEAR_POKEMON_DETAIL:
      return { 
        ...state, 
        pokemonDetail: null,
      };
    default:
      return state;
  }
};
