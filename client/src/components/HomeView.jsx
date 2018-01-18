import React from 'react';
import { connect } from 'react-redux';

import {
  createBoard,
  cancelCreateBoard,
  submitCreateBoard
} from '../actions/createBoard.js';
import NewBoardTile from './NewBoardTile.jsx';
import NewBoardForm from './NewBoardForm.jsx';

// View for the first page that the user sees after login.
// Shows boxes for each board with title, attributes (eg star)
// shows a box for creating a new board
const HomeView = ({ board, createNewBoard, cancelCreateBoard, submitCreateBoard }) => {
  if (board.isNewBoardFormOpen) {
    return <NewBoardForm handleClose={cancelCreateBoard}
      handleSubmit={submitCreateBoard} />
  } else {
    return <NewBoardTile handleClick={createNewBoard} />
  }
}

const mapStateToProps = ({ board }) => {
  return { board }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewBoard: () => dispatch(createBoard()),
    cancelCreateBoard: () => dispatch(cancelCreateBoard()),
    submitCreateBoard: (data) => dispatch(submitCreateBoard(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
