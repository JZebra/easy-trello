import {
  CREATE_BOARD,
  SUBMIT_CREATE_BOARD,
  CANCEL_CREATE_BOARD,
} from './actionTypes.js';

const createBoard = () => {
  console.log('firing CREATE_BOARD action');
  return {
    type: CREATE_BOARD,
    payload: true
  };
}

const submitCreateBoard = (boardTitle) => {
  console.log('firing SUBMIT_CREATE_BOARD action');
  return {
    type: SUBMIT_CREATE_BOARD,
    payload: {
      boardTitle: boardTitle
    }
  };
}

const cancelCreateBoard = () => {
  console.log('firing CANCEL_CREATE_BOARD action');
  return {
    type: CANCEL_CREATE_BOARD,
    payload: true
  };
}

export { createBoard, submitCreateBoard, cancelCreateBoard };
