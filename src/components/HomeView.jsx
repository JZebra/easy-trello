import React from 'react';
import { connect } from 'react-redux';
import createBoard from '../actions/createBoard.js';
import NewBoardTile from './NewBoardTile.jsx';

// View for the first page that the user sees after login.
// Shows boxes for each board with title, attributes (eg star)
// shows a box for creating a new board
const HomeView = ({ newBoardClick }) => (

  <NewBoardTile handleClick={newBoardClick} />
)

const mapDispatchToProps = dispatch => {
  return {
    newBoardClick: () => dispatch(createBoard()),
  }
}

export default connect(null, mapDispatchToProps)(HomeView);
