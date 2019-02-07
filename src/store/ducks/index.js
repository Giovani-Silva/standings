import { combineReducers } from 'redux';
import competitions from './competitions';
import standings from './standings';

export default combineReducers({
  competitions,
  standings,
});
