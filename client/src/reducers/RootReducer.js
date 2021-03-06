import { combineReducers } from 'redux';
import BoardReducer from './BoardReducer';

const RootReducer = combineReducers({
  board: BoardReducer
});

export default RootReducer;
