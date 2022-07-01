import styled from 'styled-components';
import { overlayZindex } from 'styles/variables';

const Overlay = styled.div`
  position: fixed;
  z-index: ${overlayZindex};
  left: 0;
  right: 0;
  height: 100%;
  width: ${({ open }) => (open ? '100%' : '0')};
  background-color: rgba(0, 0, 0, .9);
  transition: all 0.3s linear;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LI = styled.li`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    color: #37c0ae; 
  }
`;

export { Overlay, UL, LI };
