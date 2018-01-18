import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ({ size, color, handleClick }) => (
  <div onClick={ handleClick }>
    <svg xmlns="http://www.w3.org/2000/svg"
      width={ size }
      height={ size }
      viewBox="0 0 24 24" fill="none"
      stroke={ color } stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
  </div>
)

CloseIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  handleClick: PropTypes.func,
}

CloseIcon.defaultProps = {
  size: "24",
  color: "black",
}

export default CloseIcon;
