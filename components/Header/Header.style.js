import styled, { css } from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { AiOutlineClose } from "react-icons/ai";

import {
  headerZindex,
  device,
  headerHeight,
  headerWidthLaptop,
  secondaryColor
} from 'styles/variables';

const menuMargin = '1rem';
const headerStyle = css`
  position: fixed;
  z-index: ${headerZindex};
  height: ${headerHeight};
`;

const Header = styled.header`
  background-color: ${({ bgColor }) => bgColor};
  ${headerStyle};
  width: 100%;
`;

const Container = styled.div`
  ${headerStyle};
  width: 95vw;
  display: flex;
  justify-content: ${({ isOpen }) => (isOpen ? 'flex-end' : 'space-between')};
  align-items: center;
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  @media ${device.Laptops} {
    width: ${headerWidthLaptop};
  }
`;

const LogoLinkContainer = styled.div`
  position: relative;
  text-transform: uppercase;
  font-size: 1.3rem;
  padding-top: 4px;
  color: inherit;
  display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
`;

const HeroTxt = styled.p`
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(12%, -55%);
  transition-property: background, transform;
  transform-origin: 100% 100%;
  font-size: 0.87em;
  font-weight: bold;
  z-index: 1;
  color: #37c0ae;
  &:hover, &:active, &:focus {
    color: #fff;
    cursor: pointer;
  }
  @media ${device.TabletPortrait} {
    font-size: 0.8em;
  }
`;

const SearchLinkContainer = styled.div`
  color: #172f31;
  margin-right: ${menuMargin};
  display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  @media ${device.TabletPortrait} {
    margin-right: calc(${menuMargin} + 1rem);
  }
  &:last-child {
    margin-right: 0;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${menuMargin};
`;

const SearchIcon = styled(IoIosSearch)`
  padding-top: 4px;
  font-size: 1.6rem;
  stroke-width: 1.2rem;
  vertical-align: center;
  font-weight: bold;
  margin-left: 50px;
  color: #37c0ae;
  &:hover, &:active, &:focus {
    color: #fff;
  }
  @media ${device.TabletPortrait} {
    font-size: 1.5rem;
  }
  @media ${device.Laptops} {
    padding-right: 1rem;
  }
`;

const SearchBackIcon = styled(AiOutlineClose)`
  font-size: 2rem;
  stroke-width: 1.5rem;
  vertical-align: center;
  color: ${secondaryColor};
  font-weight: bold;
  margin-left: 50px;
  cursor: pointer;
  margin-right: 15px;
  &:hover, &:active, &:focus {
    color: #37c0ae;
  }
  @media ${device.TabletPortrait} {
    font-size: 1.3rem;
    margin-right: 3px;
  }
`;

const UL = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const LI = styled.li`
  font-size: 1rem;
  margin-right: ${menuMargin};
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  @media ${device.TabletPortrait} {
    margin-right: calc(${menuMargin} + 1rem);
  }
`;

const A = styled.span`
  &:hover, &:active, &:focus {
    color: #37c0ae;
  }
`;

const SearchCancel = styled.div`
  display: flex;
`;

const Cancel = styled.button`
   color: #fff;
   margin-right: 10px;
   font-size: 1.1em;
   &:hover, &:active, &:focus {
    color: #37c0ae;
  }
`;

export {
  Header,
  Container,
  LogoLinkContainer,
  HeroTxt,
  SearchIcon,
  SearchBackIcon,
  SearchCancel,
  SearchLinkContainer,
  MenuContainer,
  UL,
  LI,
  A,
  Cancel,
};
