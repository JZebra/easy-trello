import { combineReducers } from 'redux';
import { boardReducer } from './boardReducer';

const RootReducer = combineReducers({
  board: boardReducer
});

export default RootReducer;
