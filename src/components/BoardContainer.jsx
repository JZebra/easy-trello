import React, { Component } from 'react';
import { connect } from 'react-redux';
import createBoard from '../actions/createBoard.js';

class BoardContainer extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.props.handleClick.bind(this);
  }

  render() {
    return (
      <h2 onClick={ () => this.handleClick() }>
        Create a new board
      </h2>
      )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(createBoard()),
  }
}


export default connect(null, mapDispatchToProps)(BoardContainer);
