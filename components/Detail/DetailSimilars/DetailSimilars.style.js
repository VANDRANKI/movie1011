import styled from 'styled-components';

const PosterImg = styled.img`
  height: 30vh;
  border-radius: 5px;
  box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5rem;
  transition: transform .7s ease;
  &:hover {
    transform: scale(1.1);
    transition: transform .7s ease;
  }
`;

const PosterTitle = styled.p`
margin-top: 5px;
  font-weight: bold;
  &:hover {
    color: #E65100;
  }
`;

export { PosterImg, PosterTitle };