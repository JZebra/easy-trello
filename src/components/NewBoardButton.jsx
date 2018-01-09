import React from 'react';
import PropTypes from 'prop-types';

const NewBoardButton = ({ handleClick }) => (
  <h2 onClick={ handleClick }>
    Create a new board
  </h2>
)

NewBoardButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default NewBoardButton;
