// import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import {INCREMENT_COUNTER, DECREMENT_COUNTER, UPDATE_USER} from './action';
import {
	ActionCreator,
	PayloadAction,
	ThunkAction,
	configureStore,
	createSlice,
} from "@reduxjs/toolkit";

export interface State {
  message: string;
  message1: string;
  counter: number;
  users: {
    type: string,
    payload: any,
  },
}

const initialState = {
  message: 'init',
  message1: 'init',
  counter: 0,
  users: {
    type: '',
    payload: null,
  },
}
//change to combined reducer
export const usersSlice = (
  state: State = initialState,
  action: any,
) => {
  // console.log('reducer', action.type);
 
  switch (action.type) {
    case HYDRATE: //being called twice, need fix later
      if (action?.type.includes("HYDRATE")) {
        delete action.payload.numberSlice;
        delete action.payload.pokemonSlice;
      }
      return action.payload;
    case UPDATE_USER:
      return { ...state, users:action.payload, counter: action.payload.length};
    case INCREMENT_COUNTER:
      console.log('INCREMENT_COUNTER', state);
      // console.log('INCREMENT_COUNTER', action.payload);
      return { 
        ...state, 
        counter: action.payload + 1,
      };
    case DECREMENT_COUNTER:
      // console.log('DECREMENT_COUNTER', action.payload);
      return { 
        ...state,
        counter: action.payload - 1,
      };
    default:
      return state;
  }
};

// export const usersSlice = createSlice({
// 	name: "usersSlice",

// 	initialState,

// 	reducers: {
// 		incrementCounter(state, action) {
//       console.log('user reducer action', state, action);
// 			state.counter = action.payload + 1;
// 		},
// 		decrementCounter(state, action) {
// 			state.counter = action.payload - 1;
// 		},
//     getUser(state, action) {
//       console.log('user reducer action', action);

//       state.users = action.payload;
//       state.counter = action.payload.length;
//     }
// 		// setLocale(state, {payload}: PayloadAction<string>) {
// 		// 	state.locale = payload;
// 		// },
// 	},

// 	extraReducers(builder) {
// 		builder.addCase<typeof HYDRATE, PayloadAction<AppState, typeof HYDRATE>>(
// 			HYDRATE,
// 			(state, {payload}) => {
// 				console.log('hydrate', payload);
// 				return ({...payload});
// 				// return state;
// 			} 
// 		);
// 	},
// });