import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Wrapper } from 'styles/variables';
import { Link } from 'react-router-dom';
import LocationDisplay from 'utils/locationDisplay';
import { Section, Container, Title } from '../Detail.style';
import * as S from './DetailSimilars.style';

const DetailSimilars = () => {
  const { result } = useSelector(state => state.detail);

  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      450: {
        slidesPerView: 2,
      },
      650: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };

  return (
    <>
      <Section>
        <Wrapper>
          <Container>
            {result.similars && result.similars.length ? (
              <Title>Recommendations</Title>
            ) : null}
            <Swiper {...params}>
              {result.similars &&
                result.similars.map(similar => (
                  <Link
                    key={similar.id}
                    to={`/detail/${similar.id}`}
                  >
                    <div>
                      <S.PosterImg src={similar.posterPath} alt="recommendation movie posters" />
                      <S.PosterTitle>{similar.title}</S.PosterTitle>
                    </div>
                  </Link>
                ))}
            </Swiper>
          </Container>
        </Wrapper>
      </Section>
      <LocationDisplay />
    </>
  );
};

export default DetailSimilars;
