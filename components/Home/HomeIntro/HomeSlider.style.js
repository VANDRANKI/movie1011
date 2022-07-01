import styled from 'styled-components';
import { device, primaryColor } from 'styles/variables';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${primaryColor};
  text-align: center;
  margin-top: 15vh;
  padding: auto 5px ;

`;

const PosterImg = styled.img`
  height: 20vh;
  margin-top: 20px;
  transition: transform .7s ease;
  &:hover{
    @media ${device.Laptops} {
      transform: scale(1.5);
      transition: transform .7s ease;
    }
  }
  @media ${device.MobileLandscape} {
    margin-top: 21px;
  }
  @media ${device.TabletPortrait} {
    margin-top: 22px;
  }
  @media ${device.TabletLandscape} {
    margin-top: 23px;
  }
  @media ${device.Laptops} {
    margin-top: 25px;
  }
`;

const PosterTitle = styled.div`
  padding: 10px 0;
  overflow: hidden;
  &:hover {
    color: #37c0ae;
  }
`;

const TitleBox = styled.p`
  font-size: .7rem;
  color: #fff;
`;

export { Container, PosterImg, TitleBox, PosterTitle };
