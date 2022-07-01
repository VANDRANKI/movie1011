import styled, { keyframes } from 'styled-components';
import { device } from 'styles/variables';
import { Link } from 'react-router-dom';
import { AiFillDislike } from 'react-icons/ai';
import { FcFilmReel } from "react-icons/fc";

const itemGap = '2rem';

const Container = styled.div`
  padding: 0 5px;
  margin-bottom: 100px;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  margin-top: 3rem;
  font-size: 1.4rem;
  text-align: center;
  padding-top: 20px;
  @media ${device.MobileLandscape} {
    font-size: 1.6rem;
  }
  @media ${device.TabletPortrait} {
    font-size: 1.7rem;
  }
`;

const ItemList = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding-top: 30px;
`;

const ItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem; 
  margin-bottom: ${itemGap};
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid #fff;
  transition: all .5s ease;
  background-color: #445556;

  img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  &:hover {
      background-color: #6B7978;
      transition: all .5s ease;
  }
  @media ${device.MobileLandscape} {
    flex-basis: calc(33.33333333333% - ${itemGap});
    font-size: 1.2rem;  
  }
  @media ${device.TabletPortrait} {
    flex-basis: calc(28% - ${itemGap});
  }
  @media ${device.Laptops} {
    flex-basis: calc(22% - ${itemGap});
    font-size: 1.5rem;
  }
`;

const MovieTitle = styled.p`
  margin: 2rem 0 1rem;
  font-size: 1rem;
  text-align: center;
  overflow-y: hidden;  
  height: 1.2rem; 
  color: #fff;
  max-width:220px;
  &:hover {
    color: rgba(0,0,0,.7);
  }
`;

const Message = styled.p`
  font-size: 1rem;
  margin-top: 2rem;
  text-align: center;
  line-height: 25px;
  color: rgba(0,0,0,.7);
  padding: 0 2rem;
  @media ${device.TabletPortrait} {
    font-size: 1.1rem;
  }
`;

const RatingContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items:center;
  gap: 5px;
  span {
    padding-top: 3px;
    font-size: 13px;
    color: #fff;
  }
`;

const ReleaseDate = styled.span`
 span {
    font-size: 13px;
    color: #fff;
  }
`;

const RemoveButton = styled.button`
  display: flex;
  justify-content: space-around;
  background-color: rgba(74, 20, 140, 0.9);
  color: white;
  border-radius: 5px;
  font-size: .8rem;
  padding: 0.5rem 1rem;
  margin-top: 10px;
  &:hover {
    background-color: #E65100;
  }
`;

const DislikeIcon = styled(AiFillDislike)`
  color: white;
  padding-top: 3px;
  margin-left: 1rem;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.7s;
  transform-style: preserve-3d;
`;

const FlipCard = styled.div`
  background-color: transparent;
  width: 220px;
  height: 310px;
  perspective: 1000px;

  &:hover ${FlipCardInner} {
    transform: translateX(10px) rotateY(180deg);
    -moz-transform: translateX(10px) rotateY(180deg);
    -webkit-transform: translateX(10px) rotateY(180deg);
    -o-transform: translateX(10px) rotateY(180deg);
    -ms-transform: translateX(10px) rotateY(180deg);
  }  
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 5px;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #445556;
  color: #fff;
  transform: rotateY(180deg);
  padding: 10px;
  display: block;
  border-radius: 5px;
`;

const OverviewTitle = styled.p`
  font-size: 1.5rem;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.9);
  padding: 20px 0;
`;

const Overview = styled.p`
  font-size: .9rem;
  line-height: 20px;
`;

const MoreButton = styled.button`
    margin: 0;
    position: absolute;
    bottom: 3%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 5px 10px;
    font-size:12px;
    color: #fff;
    border-radius: 10px;
    background-color: #ffa726;
    justify-content: center;
    align-content: center;
    
  &:hover, &:active {
    background-color: #fff;
    color: #ffa726;
  }
`;

const MovieLogo = styled(FcFilmReel)`
  margin-right: 5px;
  padding-bottom: 5px;
  vertical-align: middle;
`;

const GoHomeButton = styled.button`
   color: #ffa726;
  &:hover {
    color: rgb(5,134,158);
  }
`;

export {
  Container,
  Title,
  ItemList,
  Item,
  ItemLink,
  MovieTitle,
  Message,
  RatingContainer,
  ReleaseDate,
  RemoveButton,
  DislikeIcon,
  FlipCardFront,
  FlipCardBack,
  FlipCard,
  FlipCardInner,
  OverviewTitle,
  Overview,
  MoreButton,
  MovieLogo,
  GoHomeButton
};
