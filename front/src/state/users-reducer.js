import {UserAPI as UsersAPI} from "../API/api";

const ADD_USER = 'ADD_USER';

let initialState = {
    users: [],
    totalUsers: 50,
    pageSize: 8,
    currentPage: 1
};
const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, users: action.users}
        default:
            return state;
    }
}
export const AddUsers = (users) => ({type: ADD_USER, users});
export const getUsers = () => {
    return (dispatch) => {
        UsersAPI.getUsers().then(data => {
                dispatch(AddUsers(data));
            }
        )
    }
}
export default UsersReducer;