import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_ME = 'SET-ME';
const initialState = {
  id: null,
  login: null,
  email: null,
  //   messages: [],
  //   fieldsErrors: [],
  //   resultCode: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ME:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setMe = (id, login, email) => ({ type: SET_ME, data: { id, login, email } });

export const signOut = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.resultCode === 0) {
      dispatch(setMe(null, null, null));
    }
  });
};
export const getMe = () => (dispatch) => {
  authAPI.authMe().then((response) => {
    if (response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispatch(setMe(id, login, email));
    }
  });
};
export const signIn = (authData) => (dispatch) => {
  authAPI.login(authData).then((response) => {
    if (response.resultCode === 0) {
      dispatch(getMe());
    } else {
      const message = response.messages.length > 0 ? response.messages.join(' / ') : 'Some error';
      dispatch(stopSubmit('login', { _error: message }));
    }
  });
};
export default authReducer;
