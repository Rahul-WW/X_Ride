import {legacy_createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import HomeReducer from './homeform/HomeReducer';
//if there are more reducers import here and add in rootReducer

const rootReducer = combineReducers({
  form: HomeReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
