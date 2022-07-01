import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

const Video = styled.div`
  position: relative;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const PlayButton = styled(FaPlay)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.5rem;
  transition: transform .5s ease;

  &:hover {
    color: #E65100;
    transform: scale(2);
    transition: transform .5s ease;
  }
`;

export { Video, Thumbnail, PlayButton };
