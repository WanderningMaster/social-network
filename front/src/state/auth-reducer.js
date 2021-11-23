import {AuthAPI} from "../API/api";

const ADD_AUTH_INFO = 'ADD_AUTH_INFO';
const GO_TO_SIGN_IN = 'GO_TO_SIGN_IN';
const GO_TO_SIGN_UP = 'GO_TO_SIGN_UP';
const PASS_VISIBLE = 'PASS_VISIBLE';
const PASS_INVISIBLE = 'PASS_INVISIBLE';
let initialState = {
    id: null,
    isAuth: false,
    isReg: true,
    isVisible: false
};
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTH_INFO:
            return {...state, ...action.payload, isAuth: true}
        case GO_TO_SIGN_IN:
            return {...state, isReg: true}
        case GO_TO_SIGN_UP:
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
export const AddAuthInfo = (id, isAuth) => ({type: ADD_AUTH_INFO, payload: {id, isAuth}});
export const GoToSignIn = (reg) => ({type: GO_TO_SIGN_IN, reg});
export const GoToSignUp = (reg) => ({type: GO_TO_SIGN_UP, reg});
export const PassVisible = () => ({type: PASS_VISIBLE});
export const PassInvisible = () => ({type: PASS_INVISIBLE});
export const RegistrationThunk = (username, passw) => (dispatch) => {
    AuthAPI.reg(username, passw).then(response => {
        dispatch(AddAuthInfo())
    });
    LoginThunk(username, passw);
};
export const LoginThunk = (username, passw) => dispatch => {
    AuthAPI.login(username, passw).then(response => {
        if (response.data.data !== null) {
            dispatch(AddAuthInfo(response.data.data, true))
        }
    })
}