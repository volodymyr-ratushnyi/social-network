import { authAPI, profileAPI, usersAPI } from '../api/api';
import { toggleIsFetching } from './users-reducer';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const initialState = {
  profile: null,
  status: '',
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
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
    .then((response) => {
      profileAPI.getProfile(response).then((response) => {
        dispatch(setProfile(response.data));
        dispatch(toggleIsFetching(false));
      });
      profileAPI.getStatus(response).then((response) => {
        dispatch(setStatus(response));
      });
    });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.putStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export default profileReducer;
