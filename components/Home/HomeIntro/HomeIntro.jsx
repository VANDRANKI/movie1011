import React from 'react';
import { Wrapper } from 'styles/variables';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LocationDisplay from 'utils/locationDisplay';
import * as S from './HomeIntro.style';
import StarRatings from 'react-star-ratings';

const HomeIntro = () => {
  const { result } = useSelector(state => state.intro);

  return (
    <>
      <S.HomeIntro>
        <Wrapper>
          <S.Container>
            <S.Tagline>{result.tagline}</S.Tagline>
            <Link to={`/detail/${result.id}`}>
              <S.Title>{result.title}</S.Title>
            </Link>
            {result.title ? (
              <>
                <S.RatingContainer>
                  <StarRatings
                    rating={result.rating / 2}
                    starRatedColor="#e65100"
                    numberOfStars={5}
                    starDimension="15px"
                    starSpacing="1px"
                  />
                  <span>({result.rating * 10}%)</span>
                </S.RatingContainer>
                <S.ReleaseDate>{result.releaseDate ? result.releaseDate : ''}</S.ReleaseDate>
                <S.Genres>{result.genres}</S.Genres>
                <Link to={`/detail/${result.id}`}>
                  <S.MoreButton>
                    More
              </S.MoreButton>
                </Link>
              </>
            ) : null}
          </S.Container>
        </Wrapper>
      </S.HomeIntro>
      <LocationDisplay />
    </>
  );
};

export default HomeIntro;


