import { CREATE_BOARD } from './actionTypes.js';

const createBoard = () => {
  console.log('creating board');
  return {
    type: CREATE_BOARD,
    payload: true
  };

}

export default createBoard;
