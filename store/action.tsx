// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./type";

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const TICKUP = "TICKUP";
export const TICKDOWN = "TICKDOWN";
export const GET_POKEMONLIST = "GET_POKEMONLIST";
export const CLEAR_POKEMONLIST = "CLEAR_POKEMONLIST";
export const UPDATE_USER = 'UPDATE_USER';
export const BUMP = 'BUMP';
export const INCREMENT_POKEMON_OFFSET = 'INCREMENT_POKEMON_OFFSET';
export const DECREMENT_POKEMON_OFFSET = 'DECREMENT_POKEMON_OFFSET';
export const POKEMON_DETAIL = 'POKEMON_DETAIL';
export const CLEAR_POKEMON_DETAIL = 'CLEAR_POKEMON_DETAIL';
// export const TICKDOWN = "tickDown";


interface Pokemon {
  name: string;
  count: number;
  next: string;
  previous: string | null;
  results: [object];
}

export const incrementCounter = (counter: number) => (dispatch: any) => {
  return dispatch({
    type: INCREMENT_COUNTER,
    payload: counter,
  });
};

export const decrementCounter = (counter: number) => (dispatch: any) => {
  return dispatch({
    type: DECREMENT_COUNTER,
    payload: counter,
  });
};
export const tick = () => (dispatch: any) => {
  return dispatch({
    type: TICK,
    payload: 'was set in other page',
  });
};
export const getUser = (users: any) => (dispatch: any) => {
  return dispatch({
    type: UPDATE_USER,
    payload: users,
  });
};
export const pokemonList = (pokemon: Pokemon) => (dispatch: any) => {
  return dispatch({
    type: GET_POKEMONLIST,
    payload: pokemon,
  });
};
export const clearPokemonList = () => (dispatch: any) => {
  return dispatch({
    type: CLEAR_POKEMONLIST,
  });
};
export const pokemonDetail = (pokemon: Pokemon) => (dispatch: any) => {
  return dispatch({
    type: POKEMON_DETAIL,
    payload: pokemon,
  });
};
export const clearPokemonDetail = () => (dispatch: any) => {
  return dispatch({
    type: CLEAR_POKEMON_DETAIL,
  });
};

export const bump = (message: string) => (dispatch: any) =>  {
  return dispatch({
    type: BUMP,
    payload: message,
  });
};

export const incresePokemonOffset = (offset: number) => (dispatch: any) => {
  return dispatch({
    type: INCREMENT_POKEMON_OFFSET,
    payload: offset + 1,
  });
};

export const decresePokemonOffset = (offset: number) => (dispatch: any) => {
  return dispatch({
    type: DECREMENT_POKEMON_OFFSET,
    payload: offset -1,
  });
};

// export const changePokemonList = (pokemon: any) => (dispatch: any) => {
//   return dispatch({
//     type: CHANGE_POKEMON_LIST,
//     payload: pokemon,
//   });
// };
