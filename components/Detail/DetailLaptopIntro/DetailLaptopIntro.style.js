import styled from 'styled-components';
import { primaryColor } from 'styles/variables';

const Container = styled.div`
  display: flex;
  color: ${primaryColor};
`;

const Poster = styled.img`
  width: 300px;
  margin-top: -5rem;
  margin-right: 2rem;
  box-shadow: 0 15px 10px 0 rgba(0, 0, 0, 0.9);
`;

const ReleaseDate = styled.span`
  font-size: 1.3rem;
  margin-right: 1rem;
  margin-bottom: 3px;
  vertical-align: center;
`;

const Intro = styled.div`
  flex: 1;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 750px;
  span:nth-child(2) {
    width: 100px;
    text-align: center;
  }
  span:nth-child(3) {
    width: 350px;
    text-align: center;
  }
  span:nth-child(4) {
    width: 130px;
    text-align: center;
  }
`;

const Divider = styled.div`
  height: 2px;
  background-color: ${primaryColor};
  margin: 1rem 0;
  width: 100%;
  opacity: 0.6;
`;

const OverviewTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.9em;
`;

const Tagline = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2em;
  font-style: italic;
  letter-spacing: 0.1em;
  color: #e65100;
  line-height: 1.2em;
`;

const Overview = styled.div`
  line-height: 1.5;
`;

const TitleContainer = styled.div`
  display: block;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const Favorite = styled.button`
  display: flex;
  justify-content: space-around;
  background-color: #E65100;
  color: white;
  font-size: .8rem;
  border-radius: 5px;
  padding: 0.4rem 0.8rem 0.5rem 0.8rem;
  margin: 1rem 0;
  span {
    margin-right: 1rem;
  }
  &:hover {
    opacity: 0.9;
    background-color: #6a1b9a;
    transition: background-color 0.4s ease;
  }
`;

export {
  Container,
  Intro,
  Poster,
  ReleaseDate,
  Info,
  Divider,
  OverviewTitle,
  Tagline,
  Overview,
  Title,
  TitleContainer,
  Favorite,
};
