import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../DetailImages/swiper.css';
import { Wrapper } from 'styles/variables';
import * as S from './DetailCasts.style';
import { Section, Container, Title } from '../Detail.style';

const DetailCasts = () => {
  const { result } = useSelector(state => state.detail);
  const params = {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      450: {
        slidesPerView: 3,
      },
      650: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  };

  return (
    <Section>
      <Wrapper>
        <Container>
          <Title>Casts</Title>
          {result.casts.length ? (
            <Swiper {...params}>
              {result.casts.map(cast => (
                <S.CastContent key={cast.name + cast.role}>
                  <S.CastProfile src={cast.profilePath} alt="cast profile picture" />
                  <S.CastName>{cast.name}</S.CastName>
                  <S.CastRole>{cast.role} Role</S.CastRole>
                </S.CastContent>
              ))}
            </Swiper>
          ) : (
              <p>There are no cast photos.</p>
            )}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default DetailCasts;
