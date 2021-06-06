const SET_ME = 'SET-ME';
const SIGN_OUT = 'SIGN-OUT';
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
    case SIGN_OUT:
      return {
        ...state,
        id: null,
        login: null,
        email: null,
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
export const signOut = () => ({ type: SIGN_OUT });
export const getEmail = (email) => ({ type: GET_EMAIL, email });
export const getPassword = (password) => ({ type: GET_PASSWORD, password });
export default authReducer;
