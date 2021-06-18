import { applyMiddleware, combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import newsfeedReducer from './newsfeed-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  newsfeedPage: newsfeedReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
