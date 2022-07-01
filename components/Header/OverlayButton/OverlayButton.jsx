import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { open, close } from 'store/modules/overlay';
import StyledOverlayButton from './OverlayButton.style';

const OverlayButton = ({ color }) => {
  const { isOpen } = useSelector(state => state.overlay);
  const dispatch = useDispatch();

  const onClick = () => {
    if (isOpen) {
      dispatch(close());
    } else {
      dispatch(open());
    }
  };

  window.onresize = function (event) {
    let windowInnerWidth = window.innerWidth;
    if (isOpen && windowInnerWidth > 767) {
      dispatch(close());
    }
  };

  return (
    <StyledOverlayButton
      isOpen={isOpen}
      onClick={onClick}
      color={color}
      type="button"
      aria-label="menu"
    >
      <div />
      <div />
      <div />
    </StyledOverlayButton>
  );
};

OverlayButton.propTypes = {
  color: PropTypes.string.isRequired,
};

export default OverlayButton;
