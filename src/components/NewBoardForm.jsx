import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from './styles.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  justify-content: space-around;
  border-radius: 3px;
  border: 1px solid ${colors.gray};
`

const Header = styled.div`
  display: flex;
  text-align: center;
  border-bottom: 1px solid ${colors.gray};
`

const HeaderText = styled.span`
  align-self: center;
  color: ${colors.gray};
  margin: 0 25% 0 auto;
`

//temp
const CloseButton = styled.div`
  margin: 10px;
  width: 24px;
  height: 24px;
  border: 1px solid red;
`

const TitleLabel = styled.label`
  display: block;
  text-align: left;
  margin: 10px 0 0 10px;
  font-weight: 700;
`

const TitleInput = styled.input`
  width: 92%;
  margin: 10px;
`

//temp
const Submit = styled.input`
  width: 80px;
  height: 24px;
  border: 1px solid red;
  margin: 0 100% 10px 10px;
`

// Opens when the user clicks on the NewBoardTile
// Top row: 'Create Board', close button
// divider
// 'Title'
// Textfield with board name
// Create button
class NewBoardForm extends Component {

  constructor(props) {
    super(props);
    this.state = {titleValue: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({titleValue: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    // this calls the action prop with the user input
    this.props.handleSubmit(this.state.titleValue);
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <HeaderText>
            Create Board
          </HeaderText>
          <CloseButton onClick={ this.props.handleClose.bind(this) } />
        </Header>
        <form onSubmit={this.handleSubmit}>
          <TitleLabel>Title</TitleLabel>
          <TitleInput type="text"
            value={this.state.titleValue}
            onChange={this.handleChange} /><br />
          <Submit type="submit" value="Create" />
        </form>
      </Wrapper>
    )
  }
}

NewBoardForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default NewBoardForm;
