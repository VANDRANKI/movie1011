import styled from 'styled-components';
import { device } from 'styles/variables';
import { FcFilmReel } from "react-icons/fc";

const Title = styled.h2`
  font-size: 1.4rem;
  color: #000;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 30px;
  padding-left: 20px;
  text-transform: uppercase;
  @media ${device.MobileLandscape} {
    font-size: 1.6rem;
  }
  @media ${device.TabletPortrait} {
    font-size: 1.7rem;
  }
`;

const MovieLogo = styled(FcFilmReel)`
  margin-right: 5px;
  padding-bottom: 5px;
  vertical-align: middle;
`;

const UL = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const LI = styled.button`
  display:inline;
  width: 25%;
  text-align: center;
  font-size: .7rem;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 10px 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ state, currentState }) => (state === currentState ? '#445556' : '#9CA6A5')};

  &:not(:last-child) {
    border-right: 1px solid #fff;
  }
  @media ${device.MobileLandscape} {
    font-size: 1rem;
  }
  @media ${device.TabletPortrait} {
    font-size: 1.1rem;
  }
  @media ${device.TabletLandscape} {
    font-size: 1.2rem;
  }
  &:hover {
    background-color: ${({ state, currentState }) => (state === currentState ? '#445556' : '#6B7978')};
    transition: background-color .3s ease-in-out;
  }
`;

export { Title, UL, LI, MovieLogo };
