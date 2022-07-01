import styled from 'styled-components';
import { homeIntroZindex, device, secondaryColor } from 'styles/variables';

const HomeIntro = styled.section`
  position: relative;
  z-index: ${homeIntroZindex};
  height: 30vh;
`;

const Container = styled.div`
  position: relative;
  z-index: ${homeIntroZindex};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  height: 40vh;
  padding: 10px;
`;

const contentMarginBottom = '.5em';

const Tagline = styled.p`
  font-size: .6em;
  font-style: italic;
  letter-spacing: 0.1em;
  margin-bottom: ${contentMarginBottom};
  line-height: 1.2em;
  text-shadow: 2px 2px 1px #1b6056;

  @media ${device.TabletPortrait} {
    font-size: .8em;
  }
  @media ${device.Laptops} {
    font-size: .9em;
  }
`;

const Title = styled.p`
  font-size: 1.2em;
  letter-spacing: 0.1em;
  margin-bottom: ${contentMarginBottom};
  font-weight: 700;
  text-shadow: 2px 2px 3px #37c0ae;

  &:hover {
    color: #e65100;
  }

  @media ${device.TabletPortrait} {
    font-size: 1.8em;
  }
  @media ${device.Laptops} {
    font-size: 2.5em;
  }
`;

const RatingContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
  span {
    padding-top: 3px;
    font-size: .7em;
  }
`;

const ReleaseDate = styled.p`
  font-size: .7em;
  margin-top: .5em;
  letter-spacing: 0.1em;
`;

const Genres = styled.p`
  font-size: .6em;
  letter-spacing: 0.2em;
  margin-top: ${contentMarginBottom};
  margin-bottom: calc(${contentMarginBottom} + 1.5em);
  font-weight: 700;
`;

const MoreButton = styled.button`
  width: 70px;
  padding: 5px;
  border-radius: 10px;
  background-color: #e65100;
  color: white;
  font-size: 10px;
  font-weight: bold;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${secondaryColor};
    color: rgba(191, 54, 12, 0.9);
  }
  @media ${device.TabletPortrait} {
    width: 85px;
    font-size: 13px;
    padding: 7px;
    border-radius: 15px;
  }
`;

export { HomeIntro, Container, Tagline, Title, ReleaseDate, Genres, MoreButton, RatingContainer };
