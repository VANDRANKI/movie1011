import styled from 'styled-components';
import { device } from 'styles/variables';

const gap = '25px';
const GridItem = styled.div`
  position: relative;
  flex: 100%;
  padding: ${gap};
  @media ${device.TabletPortrait} {
    flex: calc(50% - ${gap} * 2);
  }
  @media ${device.TabletLandscape} {
    flex: calc(33.3333333% - ${gap} * 2);
  }
  @media ${device.Laptops} {
    flex: calc(25% - ${gap} * 2);
  }
`;

const Card = styled.div`
  position: relative;
  flex-basis: 100%;
  background: ${({ backdropPath }) => `url(${backdropPath}) center no-repeat`};
  background-size: cover;
  height: 38vh;
  overflow: hidden;
  margin-bottom: 3px;
  box-shadow: 0 0 2px 2px #fff;
  border-radius: 5px;
`;

const Content = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -30%);
  font-weight: bold;
  color: white;
  text-align: center;
  span:nth-child(1) {
    font-size: 1.2em;
    color: #E65100;
    text-shadow: 2px 1px 2px #fff;
  }
  span:nth-child(1):hover {
    color: #E65100;
    text-shadow: 1px 1px 1px #000;
  }
  span:nth-child(2) {
    font-size: .9em;
    padding-top: 1px;
  }
  span:nth-child(3) {
    font-size: .7em;
    margin-bottom: 1rem;
  }
`;

const RatingContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const MoreInfoBtn = styled.button`
  position: absolute;
  right: 32px;
  top: 35px;
  display: flex;
  padding: 5px 10px;
  font-size:12px;
  color: #fff;
  border-radius: 10px;
  background-color: #ffa726;
  &:hover, &:active {
    background-color: #fff;
    color: #ffa726;
    border: 2px solid #ffa726;
  }
`;

const Favorite = styled.button`
  z-index: 3;
  position: absolute;
  left: 32px;
  top: 35px;
  display: flex;
  padding: 5px 10px;
  font-size:12px;
  color: #fff;
  border-radius: 10px;
  background-color: ${({ isFavorite }) => (isFavorite ? '#6a1b9a' : '#E65100')};
  &:hover, &:active {
    color: ${({ isFavorite }) => (isFavorite ? '#6a1b9a' : '#E65100')};
    background-color: #fff;
    border: 2px solid ${({ isFavorite }) => (isFavorite ? '#6a1b9a' : '#E65100')};
  }
`;

export { GridItem, Card, Content, RatingContainer, MoreInfoBtn, Favorite };
