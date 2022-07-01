import styled from 'styled-components';
import { footerZindex } from 'styles/variables';
import { AiOutlineConsoleSql, AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { device } from 'styles/variables';

const Footer = styled.footer`
  padding: .7rem 0 .5rem;
  background-color: ${({ bgColor }) => bgColor};
  z-index: ${footerZindex};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const SocialContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 3px;
  align-items: center;
  opacity: 0.9;
  width: 25%;
  @media ${device.MobileLandscape} {
    gap: 7px;
    width: 20%;
  }
  @media ${device.TabletPortrait} {
    gap: 10px;
    width: 15%;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
`;

const Author = styled.p`
  display: grid;
  grid-template-columns: 89% 11%;
  grid-gap: 5px;
  margin-left: 25px;
  font-size: .6rem;
  @media ${device.MobileFooter} {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 5px;
    font-size: .7rem;
  }
  @media ${device.TabletPortrait} {
    font-size: .8rem;
    margin-left: 0;
  }
  @media ${device.TabletLandscape} {
    font-size: .9rem;
  }
  @media ${device.Laptops} {
    font-size: 1rem;
  }
`;

const PortfolioIcon = styled(AiOutlineConsoleSql)`
  font-size: 1.2rem;
  stroke-width: 1.5rem;
  vertical-align: center;
  color: #ffa726;
  font-weight: bold;
  padding-top: 3px;
  &:hover, &:active, &:focus {
    color: #fff;
  }
  @media ${device.MobileLandscape} {
    padding-top: 5px;
  }
  @media ${device.TabletPortrait} {
    font-size: 1.3rem;
  }
`;

const EmailIcon = styled(AiFillMail)`
 font-size: 1.1rem;
  stroke-width: 1.5rem;
  color: #ffa726;
  padding-top: 4px;
  &:hover, &:active, &:focus {
    color: #fff;
  }
`;

const FacebookIcon = styled(AiFillFacebook)`
 font-size: 1.2rem;
  stroke-width: 1.5rem;
  vertical-align: center;
  color: #ffa726;
  &:hover, &:active, &:focus {
    color: #fff;
  }
`;

const LinkedinIcon = styled(AiFillLinkedin)`
 font-size: 1.2rem;
  stroke-width: 1.5rem;
  vertical-align: center;
  color: #ffa726;
  &:hover, &:active, &:focus {
    color: #fff;
  }
`;

const TwitterIcon = styled(AiFillTwitterSquare)`
 font-size: 1.2rem;
  stroke-width: 1.5rem;
  vertical-align: center;
  color: #ffa726;
  &:hover, &:active, &:focus {
    color: #fff;
  }
`;

const Developer = styled.p`
  float:left;
  padding-top: 5px;
`;

const EducationalPurpose = styled.p`
  float:left;
  padding-top: 5px;
  @media ${device.MobileFooter} {
    margin-left: 5px;
  }
  @media ${device.TabletPortrait} {
    margin-left: 55px;
  }
`;

export {
  Footer, SocialContainer, Copyright,
  Container, Author, PortfolioIcon, EmailIcon,
  FacebookIcon, LinkedinIcon, TwitterIcon, Developer, EducationalPurpose
};
