import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from './styles.js';

const Title = styled.h3`
  color: ${colors.white};
`

const Wrapper = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-around;
  border-radius: 3px;
  background-color: ${colors.lightBlue};
  &:hover {
    background-color: ${colors.darkBlue};
  }
`

const NewBoardTile = ({ handleClick }) => (
  <Wrapper onClick={ handleClick }>
    <Title>
      Create a new board...
    </Title>
  </Wrapper>
)

NewBoardTile.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default NewBoardTile;
