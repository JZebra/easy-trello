import {
  CREATE_BOARD,
} from '../actions/actionTypes.js';

const initialState = {
  isBoardOpen: false
};


const BoardReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_BOARD:
      console.log('CREATE_BOARD action hit BoardReducer')
      newState = {
        ...state,
        isBoardOpen: true
      }
      break;

    default:
      console.log('default BoardReducer')
      newState = state;
  }

  return newState;
}

export default BoardReducer
