import styled from 'styled-components';
import { primaryColor, device } from 'styles/variables';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

const Background = styled.section`
  position: relative;
  z-index: -1;
  background: url(${({ backdropPath }) => backdropPath}) no-repeat center;
  background-size: cover;
  height: 40vh;
  filter: grayscale(100%);
  @media ${device.Laptops} {
    height: 60vh;
  }
`;

const Poster = styled.img`
  display: block;
  width: 50vw;
  margin-top: -150px;
  box-shadow: 0 5px 2px 0 rgba(0, 0, 0, 0.5);
  @media ${device.TabletPortrait} {
    width: 30vw;
  }
`;

const Title = styled.h2`
    font-size: 1.4rem;
    padding: 10px 0 5px;
  @media ${device.TabletPortrait} {
    font-size: 1.6rem;
  }
`;

const ReleaseDate = styled.span`
  font-size: .8rem;
  @media ${device.TabletPortrait} {
    font-size: .9rem;
  }
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 2rem 0;
  font-size: .6rem;
  span:nth-child(1) {
    color: #e65100;
    text-align: left;
  }
  span:nth-child(3) {
    text-align: right;
    color: #e65100;
  }
  @media ${device.MobileLandscape} {
    font-size: 1rem;
  }
  @media ${device.TabletPortrait} {
    font-size: 1.5rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  border-top: 2px solid ${primaryColor};
  opacity: 0.5;
  margin: 2rem 0;
`;

const OverviewTitle = styled.h2`
  margin-bottom: 1rem;
`;

const contentMarginBottom = '.5em';

const Tagline = styled.p`
  font-size: .9em;
  font-style: italic;
  letter-spacing: 0.1em;
  color: #e65100;
  margin-bottom: ${contentMarginBottom};
  line-height: 1.2em;
  @media ${device.MobileLandscape} {
    font-size: 1em;
  }
  @media ${device.TabletPortrait} {
    font-size: 1.1em;
  }
`;

const OverviewContent = styled.div`
  line-height: 1.5;
  font-size: .7em;
  @media ${device.MobileLandscape} {
    font-size: .8em;
  }
  @media ${device.TabletPortrait} {
    font-size: .9em;
  }
`;

const Favorite = styled.button`
  display: flex;
  justify-content: space-around;
  background-color: #E65100;
  color: white;
  font-size: .7rem;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  span {
    margin-right: 1rem;
  }
  &:hover {
    opacity: 0.9;
    background-color: #6a1b9a;
    transition: background-color 0.4s ease;
  }
`;

const LikeIcon = styled(AiFillLike)`
  color: white;
`;

const DislikeIcon = styled(AiFillDislike)`
  color: white;
  padding-top: 3px;
`;

export {
  Background,
  Poster,
  Title,
  ReleaseDate,
  Info,
  Divider,
  OverviewTitle,
  Tagline,
  OverviewContent,
  Favorite,
  LikeIcon,
  DislikeIcon,
};
