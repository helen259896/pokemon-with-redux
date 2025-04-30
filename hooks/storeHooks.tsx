import { useDispatch, useSelector } from 'react-redux';
// import { applyMiddleware, combineReducers, Store } from "redux";
import {AppDispatch, combindReducer} from '@/store/store';


export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<typeof combindReducer>();
