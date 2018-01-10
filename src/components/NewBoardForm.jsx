import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from './styles.js';

const Wrapper = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-around;
  border-radius: 3px;
`

const Header = styled.div`
  text-align: center;
  border-bottom: 1px solid ${colors.gray};
`

const HeaderText = styled.span`
  color: ${colors.gray};
`

//temp
const CloseButton = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid red;
`

const TitleLabel = styled.h3`
  font-weight: 700;
`

//temp
const SubmitButton = styled.div`
  width: 80px;
  height: 24px;
  border: 1px solid red;
`

// Opens when the user clicks on the NewBoardTile
// Top row: 'Create Board', close button
// divider
// 'Title'
// Textfield with board name
// Create button
const NewBoardForm = ({ handleClose, handleSubmit }) => (
  <Wrapper>
    <Header>
      <HeaderText>
        Create Board
      </HeaderText>
      <CloseButton onClick={ handleClose } />
    </Header>
    <form action="">
      <TitleLabel>Title</TitleLabel>
      <input type="text"/><br />
      <SubmitButton onClick={ handleSubmit } />
    </form>
  </Wrapper>
)

NewBoardForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default NewBoardForm;
