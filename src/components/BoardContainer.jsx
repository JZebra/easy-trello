import React, { Component } from 'react';
import createBoard from '../actions/createBoard.js'

class BoardContainer extends Component {

  render() {
    return (
      <h2 onClick={ () => createBoard() }>
        Create a new board</h2>
      )
  }
}


export default BoardContainer;
