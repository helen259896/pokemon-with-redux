import { applyMiddleware, combineReducers, Store } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import { createSlice } from '@reduxjs/toolkit'
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
// import { reducer, State } from "./usersSlice";
import {numberSlice} from './numberSlice';
import {usersSlice} from './usersSlice';
import { pokemonSlice } from "./pokemonSlice";
// import {reducer} from '@/types';
// import { useDispatch, useSelector } from 'react-redux'






export const combindReducer = combineReducers({
    usersSlice,
    numberSlice,
    pokemonSlice,
    // OTHER REDUCERS WILL BE ADDED HERE
})

// isServer undefined

export const makeStore: MakeStore<any> = () => {
    // const isServerT = typeof window === 'undefined'
    
    // console.log('makeStore', isServerT, isServer);
    // console.log('makeStore 22222222', process);
    return configureStore({
        reducer: combindReducer,
        devTools: true,
        middleware: getDefaultMiddleware =>
            [...getDefaultMiddleware(), thunkMiddleware].filter(
                Boolean,
            ) as any,
    });
}

type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType< typeof combindReducer>;
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppSelector = useSelector.withTypes<typeof combindReducer>();


// export type AppDispatch = AppStore.dispatch;
// export type AppDispatch = typeof makeStore..dispatch;
export const wrapper = createWrapper<Store<AppStore>>(makeStore, { debug: true });
