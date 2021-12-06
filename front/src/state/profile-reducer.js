import {UserAPI} from "../API/api";

const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    profile: []
};
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const getProfile = (id) => {
    return (dispatch) => {
        UserAPI.getProfile(id).then(response => {
                dispatch(setProfile(response.data.data));
                console.log(response.data.data);
            }
        )
    }
}
export default ProfileReducer;