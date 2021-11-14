import {applyMiddleware, combineReducers, createStore} from 'redux';
import UsersReducer from './users-reducer';
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from 'redux-thunk';
import LoginReducer from "./auth-reducer";

let reducers = combineReducers({
    usersPage: UsersReducer,
    login: LoginReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;