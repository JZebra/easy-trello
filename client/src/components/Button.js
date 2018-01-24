import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.a`
  display: inline-block;
  justify-content: space-around;
  color: ${props => props.textColor};
  background-color: ${props => props.backGroundColor};
  padding: 10px 20px;
  margin: 10px;
  border-radius: 4px;
`

const Button = ({ text, backGroundColor, textColor, handleClick }) => (
  <Wrapper
    onClick={ handleClick }
    textColor={ textColor }
    backGroundColor={ backGroundColor }>
    { text }
  </Wrapper>
)

Button.propTypes = {
  textColor: PropTypes.string.isRequired,
  backGroundColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button;
