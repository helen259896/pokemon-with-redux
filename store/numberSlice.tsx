// import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import {
	ActionCreator,
	PayloadAction,
	ThunkAction,
	configureStore,
	createSlice,
} from "@reduxjs/toolkit";
import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './action';
import {TICKUP, TICKDOWN} from './action';

export interface State {
  // message: string;
  anotherCounter: number;
}

const initialState = {
  // message: 'start',
  anotherCounter: 0,
}
//change to combined reducer
export const numberSlice = (
  state: State = initialState,
  action: any,
) => {
  // console.log('reducer', action.type, action.payload);
  // console.log('numberSlice', action);
  switch (action.type) {
    // case HYDRATE:
    //   console.log('HYDRATE 222', action.payload);
    //   if (action.payload.app === "init") delete action.payload.app;
    //   if (action.payload.page === "init") delete action.payload.page;
    //   return { ...state, ...action.payload };
   
    case 'TICKUP':
      // console.log('TICK 33333');
      return { ...state, anotherCounter:action.payload};
    case 'TICKDOWN':
      // console.log('TICK 33333');
      return { ...state, anotherCounter:action.payload};
    // case DECREMENT_COUNTER:
    //   return { ...state, counter: action.payload };
    default:
      return state;
  }
};

// export const numberSlice = createSlice({
// 	name: "numberReducer",

// 	initialState,

// 	reducers: {
// 		tickUp(state) {
//       console.log('tickup action', state);
// 			state.anotherCounter += 1;
// 		},
// 		tickDown(state) {
// 			state.anotherCounter -= 1;
// 		},
// 		// setLocale(state, {payload}: PayloadAction<string>) {
// 		// 	state.locale = payload;
// 		// },
// 	},

// 	// extraReducers(builder) {
// 	// 	builder.addCase<typeof HYDRATE, PayloadAction<AppState, typeof HYDRATE>>(
// 	// 		HYDRATE,
// 	// 		(state, {payload}) => ({...state, ...payload.page})
// 	// 	);
// 	// },
// });