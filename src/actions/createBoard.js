import { CREATE_BOARD } from './actionTypes.js';

const createBoard = () => {
  console.log('firing CREATE_BOARD action');
  return {
    type: CREATE_BOARD,
    payload: true
  };

}

export default createBoard;
