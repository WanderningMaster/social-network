const ADD_AUTH_INFO = 'ADD_AUTH_INFO';
const GO_TO_SIGNIN = 'GO_TO_SIGNIN';
const GO_TO_SIGNUP = 'GO_TO_SIGNUP';
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    reg: true
};
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTH_INFO:
            return {...state, ...action.data, isAuth: true}
        case GO_TO_SIGNIN:
            return {...state, reg: true}
        case GO_TO_SIGNUP:
            return {...state, reg: false}
        default:
            return state;
    }
}

export default LoginReducer;
export const AuthMe = (data) => ({type: ADD_AUTH_INFO, data});
export const GoToSignIn = (reg) => ({type: GO_TO_SIGNIN, reg});
export const GoToSignUp= (reg) => ({type: GO_TO_SIGNUP, reg});