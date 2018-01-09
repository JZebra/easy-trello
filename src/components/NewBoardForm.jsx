import React from 'react';
import PropTypes from 'prop-types';

// Opens when the user clicks on the NewBoardTile
// Top row: 'Create Board', close button
// divider
// 'Title'
// Textfield with board name
// Create button
const NewBoardForm = ({ handleClose, handleSubmit }) => (
    <span>Create Board</span>
    <CloseButton onClick={ handleClose } />
    <h3>Title</h3>
    <Text>What are you planning?</Text>
    <Submit />
)

NewBoardForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default NewBoardForm;
