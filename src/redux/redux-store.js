import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import newsfeedReducer from './newsfeed-reducer';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  newsfeedPage: newsfeedReducer,
});

let store = createStore(reducers);

export default store;
