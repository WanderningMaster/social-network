import {AuthAPI} from "../API/api";
import {Redirect, Route} from "react-router-dom";

const ADD_AUTH_INFO = 'ADD_AUTH_INFO';
const GO_TO_SIGNIN = 'GO_TO_SIGNIN';
const GO_TO_SIGNUP = 'GO_TO_SIGNUP';
const REG_DATA = 'REG_DATA';
const PASS_VISIBLE = 'PASS_VISSIBLE';
const PASS_INVISIBLE = 'PASS_INVISSIBLE';
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isReg: true,
    isVisible: false
};
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTH_INFO:
            return {...state, ...action.payload, isAuth: true}
        case GO_TO_SIGNIN:
            return {...state, isReg: true}
        case GO_TO_SIGNUP:
            return {...state, isReg: false}
        case PASS_VISIBLE:
            return {...state, isVisible: true}
        case PASS_INVISIBLE:
            return {...state, isVisible: false}
        default:
            return state;
    }
}

export default LoginReducer;
export const AddAuthInfo = (username, passw) => ({type: ADD_AUTH_INFO, payload: {username, passw}});
export const GoToSignIn = (reg) => ({type: GO_TO_SIGNIN, reg});
export const GoToSignUp = (reg) => ({type: GO_TO_SIGNUP, reg});
export const PassVisible = () => ({type: PASS_VISIBLE});
export const PassInvisible = () => ({type: PASS_INVISIBLE});
export const RegistrationThunk = (username, passw) => (dispatch) => {
    AuthAPI.reg(username, passw).then(response => {
        dispatch(AddAuthInfo(response.data))
    })
};
export const LoginThunk = (username, passw) => dispatch => {
    AuthAPI.login(username, passw).then(response => {
        if (response.data !== null) {
            dispatch(AddAuthInfo(response.data.data))
        }
    })
}