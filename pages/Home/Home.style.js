import styled from 'styled-components';
//import { device } from 'styles/variables';

const Main = styled.main`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: ${({ backdropPath }) => `url(${backdropPath}) center no-repeat`};
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #172f31;
    opacity: 0.5;
    height: 100vh;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export { Main, Background, LoaderContainer };
