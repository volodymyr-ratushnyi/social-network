import { authAPI, usersAPI } from '../api/api';
import { toggleIsFetching } from './users-reducer';
const SET_PROFILE = 'SET-PROFILE';
const initialState = {
  profile: null,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, profile: action.profile };

    default:
      return state;
  }
};

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const getProfile = (user_id) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  authAPI
    .authMe()
    .then((response) => {
      if (user_id) {
        return user_id;
      } else if (response.resultCode === 0) {
        return response.data.id;
      } else {
        return 2;
      }
    })
    .then((res) => {
      usersAPI.getProfile(res).then((response) => {
        dispatch(setProfile(response.data));
        dispatch(toggleIsFetching(false));
      });
    });
};
export default profileReducer;
