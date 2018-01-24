import React from 'react';
import styled from 'styled-components';
import { colors } from './styles.js';
import Button from './Button.js';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  background-color: ${colors.darkBlue};
`

const Navbar = () => (
  <Wrapper>
    <Button textColor='black'
      backGroundColor={ colors.gray }
      handleClick={ () => console.log('log in clicked') }
      text='Log In'/>
    <Button textColor={ colors.white }
      backGroundColor={ colors.green }
      handleClick={ () => console.log('sign up clicked') }
      text='Sign Up'/>
  </Wrapper>
)

export default Navbar;
