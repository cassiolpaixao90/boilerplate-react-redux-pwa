import { combineReducers } from 'redux';
import route from './route.reducer';
import login from './login.reducer'

const rootReducer = combineReducers({
  route,
  login
});

export default rootReducer;
