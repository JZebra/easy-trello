import {
  CREATE_BOARD,
  DELETE_BOARD,
} from '../actions/actionTypes.js';

const initialState = {
  isBoardOpen: false
};


export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state,
        isBoardOpen: true
      }
      break;

    case DELETE_BOARD:
      return {
        ...state,
        isBoardOpen: false
      }
      break;

    default:
      return state;
  }
}
