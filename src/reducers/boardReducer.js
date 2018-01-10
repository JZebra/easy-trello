import {
  CREATE_BOARD,
  SUBMIT_CREATE_BOARD,
  CANCEL_CREATE_BOARD,
} from '../actions/actionTypes.js';

const initialState = {
  isNewBoardFormOpen: false,
};


const BoardReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_BOARD:
      console.log('CREATE_BOARD action hit BoardReducer')
      newState = {
        ...state,
        isNewBoardFormOpen: true
      }
      break;
    case SUBMIT_CREATE_BOARD:
      console.log('SUBMIT_CREATE_BOARD action hit BoardReducer')
      newState = {
        ...state,
        isNewBoardFormOpen: false
      }
      break;
    case CANCEL_CREATE_BOARD:
      console.log('CANCEL_CREATE_BOARD action hit BoardReducer')
      newState = {
        ...state,
        isNewBoardFormOpen: false
      }
      break;
    default:
      console.log('default BoardReducer')
      newState = state;
  }

  return newState;
}

export default BoardReducer
