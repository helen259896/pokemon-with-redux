import { useDispatch, useSelector } from 'react-redux';
// import { applyMiddleware, combineReducers, Store } from "redux";
import {AppDispatch, RootState} from '@/store/store';
// import {AppDispatch, combindReducer, RootState} from '@/store/store';

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppSelector = useSelector.withTypes<typeof combindReducer>();
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
