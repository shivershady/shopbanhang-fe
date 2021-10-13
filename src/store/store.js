import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import userReducer from './userReducer';

const reducer = combineReducers({
  user: userReducer,
});

export default configureStore({
    reducer
})

