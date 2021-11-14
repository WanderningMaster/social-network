const ADD_AUTH_INFO = 'ADD_AUTH_INFO';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};
const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTH_INFO:
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

export default UsersReducer;