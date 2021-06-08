import { authAPI } from '../api/api';

const SET_ME = 'SET-ME';
const GET_EMAIL = 'GET-EMAIL';
const GET_PASSWORD = 'GET-PASSWORD';
const initialState = {
  id: null,
  login: null,
  email: null,
  //   messages: [],
  //   fieldsErrors: [],
  //   resultCode: null,
  myEmail: '',
  myPassword: '',
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ME:
      return {
        ...state,
        ...action.data,
      };
    case GET_EMAIL:
      return {
        ...state,
        myEmail: action.email,
      };
    case GET_PASSWORD:
      return {
        ...state,
        myPassword: action.password,
      };
    default:
      return state;
  }
};

export const setMe = (id, login, email) => ({ type: SET_ME, data: { id, login, email } });
export const getEmail = (email) => ({ type: GET_EMAIL, email });
export const getPassword = (password) => ({ type: GET_PASSWORD, password });
export const signIn = (email, password) => (dispatch) => {
  authAPI.login(email, password).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setMe(response.data.userId, null, email));
    }
  });
};
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
export default authReducer;
