import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { hoverOrangeColor, device } from 'styles/variables';
import { FcFilmReel } from "react-icons/fc";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  margin-top: -81vh;
`;

const Title = styled.p`
  margin-bottom: 15px;
  font-size: 1.1rem;
  text-align: left;
  padding-left: 10px;
  color: #fff;
  @media ${device.MobileLandscape} {
    font-size: 1.2rem;
  }
  @media ${device.TabletPortrait} {
    font-size: 1.4rem;
  }
  @media ${device.TabletLandscape} {
    font-size: 1.5rem;
  }
  @media ${device.Laptops} {
    font-size: 1.7rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem 0.5rem 0.6rem;
  border-radius: 5px;
  margin: 0 .25rem .25rem;
  border:none;
  flex-basis: 3%;
  font-size: .7rem;
  color: rgb(81, 100, 102);
  
  &::placeholder { 
    opacity: .5; 
    padding-left: 5px;
  }
  &:-ms-input-placeholder { 
    opacity: .5;
    padding-left: 5px;
  }
  &::-ms-input-placeholder { 
    opacity: .5;
    padding-left: 5px;
  }
  &:focus {
    caret-color: #fff;
    border: 1px solid #fff;
    background-color: rgb(176,183,183);
  }

  &:focus::-webkit-input-placeholder{
    color: #fff;
    opacity: 1;
  }
  &:focus::-moz-placeholder{
    color: #fff;
    opacity: 1;
  }
  &:focus:-moz-placeholder{
    color: #fff;
    opacity: 1;
  }
  &:focus:-ms-input-placeholder {
    color: #fff;
    opacity: 1;
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
`;

const Result = styled.div`
  overflow-y: auto;
  max-height: 50vh;
  background-color: rgba(23,47,49,9);
  margin: 0.5rem .2rem;
`;

const Poster = styled.img`
  width: 40%;
  height: auto;
  box-shadow: 0 1px 2px 2px #fff;
`;

const Item = styled(Link)`
  display: grid;
  padding: .5rem 0 .5rem .5rem;
  color: #fff;
  grid-template-columns: 15% 42% 25% 5%;
  grid-gap: 4px;
  align-items: center;
  font-size: .6rem;
  border-bottom: 3px solid #fff;
  @media ${device.MobileLandscape} {
    font-size: .8rem;
  }
  @media ${device.TabletPortrait} {
    font-size: 1rem;
    grid-template-columns: 15% 50% 15% 5%;
  }
  @media ${device.TabletLandscape} {
    font-size: 1.1rem;
    grid-template-columns: 10% 63% 15% 5%;
  }
  &:hover, &:active, &:focus {
    color: ${hoverOrangeColor};
    background-color: rgba(55,192,174,.5);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const BackgroundImage = styled.section`
  position: relative;
  z-index: -1;
  background-color: #000;
  background-size: cover;
  height: calc(100vh - 50px);
  opacity: .8;
  &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #172f31;
      opacity: .9;
      height: calc(100vh - 50px);
  }
`;

export { Container, Title, Input, Result, Poster, Item, LoaderContainer, BackgroundImage };
