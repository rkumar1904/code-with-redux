import loginReducer from './login';
import counterReducer from './counter';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  login: loginReducer,
  counter: counterReducer,
});

export default rootReducers;