import styled from 'styled-components';

const StyledOverlayButton = styled.button`
  width: 1.5rem;
  height: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  cursor: pointer;

  div {
    width: 1.5rem;
    height: 0.15rem;
    background-color: ${({ isOpen }) =>
    isOpen ? 'white' : ({ color }) => color};
    transition: all 0.2s linear;
    &:first-child {
      width: ${({ isOpen }) => (isOpen ? '1.5rem' : '1.5rem')};
      transform-origin: top left;
      transform: ${({ isOpen }) => (isOpen ? 'rotateZ(45deg)' : 'rotateZ(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
      transform: ${({ isOpen }) =>
    isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    &:nth-child(3) {
      width: ${({ isOpen }) => (isOpen ? '1.5rem' : '1.5rem')};
      margin-left: auto;
      transform-origin: bottom left;
      transform: ${({ isOpen }) => (isOpen ? 'rotateZ(-45deg)' : 'rotateZ(0)')};
    }
  }
`;

export default StyledOverlayButton;
