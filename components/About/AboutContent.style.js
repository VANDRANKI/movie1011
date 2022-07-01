import styled from 'styled-components';
import { device } from 'styles/variables';
import { FcFilmReel } from "react-icons/fc";

const Container = styled.div`
  padding: 0 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  margin-top: 4rem;
  font-size: 1.4rem;
  text-align: center;

  @media ${device.MobileLandscape} {
    font-size: 1.6rem;
  }
  @media ${device.TabletPortrait} {
    font-size: 1.7rem;
  }
`;

const MiddleTitle = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  @media ${device.MobileLandscape} {
    font-size: 1.3rem;
  }
  @media ${device.TabletPortrait} {
    font-size: 1.5rem;
  }
`;

const Intro = styled.p`
  padding: 2rem;
  text-align: letf;
  line-height: 30px;
  font-size: .8rem;
  color: rgba(0,0,0,.7);

  a {
    color: rgb(21,183,219);
    text-decoration: underline;
  }

  a:hover {
    color: rgb(132,204,167);
  }

  @media ${device.TabletPortrait} {
    font-size: .9rem;
  }
  @media ${device.TabletPortrait} {
    font-size: 1rem;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 5vh;
  min-height: 50px;
  width: 100%;
  margin: 1rem 0 2rem;

  @media ${device.MobileLandscape} {
    max-height: 6vh;
  }
  @media ${device.TabletPortrait} {
    margin: 2rem 0 3rem;
    max-height: 7vh;
  }
  @media ${device.TabletLandscape} {
    max-height: 8vh;
  }
  @media ${device.Laptops} {
    max-height: 10vh;
  }
`;

const HeaderLogo = styled.img`
  display: block;
  margin: 2rem auto;
  width: 20%;
  min-width: 70px;
  padding-bottom: 1rem;

  @media ${device.TabletPortrait} {
    margin-top: 2rem;
    width: 10%;
  }
`;

const ViewCode = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem 1rem 1rem 0;
  font-weight: bold;
`;

const MovieLogo = styled(FcFilmReel)`
  margin-right: 5px;
  padding-bottom: 5px;
  vertical-align: middle;
`;
export { Container, Title, Intro, Logo, HeaderLogo, ViewCode, MiddleTitle, MovieLogo };
