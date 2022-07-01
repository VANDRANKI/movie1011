import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Wrapper } from 'styles/variables';
import { Section, Container, Title } from '../Detail.style';
import * as S from './DetailVideos.style';

const DetailVideos = () => {
  const { result } = useSelector(state => state.detail);
  const params = {
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      980: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <Section>
      <Wrapper>
        <Container>
          <Title>Trailer</Title>
          {result.videos.length ? (
            <Swiper {...params}>
              {result.videos.map(video => (
                <a
                  key={video.path}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={video.path}
                >
                  <S.Video>
                    <S.Thumbnail src={video.thumbnail} alt="video thumbnail for the movie" />
                    <S.PlayButton />
                  </S.Video>
                </a>
              ))}
            </Swiper>
          ) : (
              <p>There are no trailers.</p>
            )}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default DetailVideos;
