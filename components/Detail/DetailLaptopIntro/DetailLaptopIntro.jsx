import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import mediumZoom from 'medium-zoom';
import {
  Background,
  LikeIcon,
  DislikeIcon,
} from 'components/Detail/DetailIntro/DetailIntro.style';
import { Section } from 'components/Detail/Detail.style';
import { Wrapper } from 'styles/variables';
import * as S from './DetailLaptopIntro.style';

const DetailLaptopIntro = () => {
  const { result } = useSelector(state => state.detail);
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem(result.id) !== null,
  );
  const zoom = mediumZoom({ background: 'rgba(0, 0, 0, 0.8)', margin: 50 });

  const onClickFavorite = () => {
    const newFavorite = localStorage.getItem(result.id) === null;
    if (newFavorite) {
      localStorage.setItem(
        result.id,
        JSON.stringify({
          id: result.id,
          title: result.title,
          posterPath: result.posterPath,
          releaseDate: result.releaseDate,
          rating: result.rating,
          overview: result.overview,
        }),
      );
    } else {
      localStorage.removeItem(result.id);
    }
    setIsFavorite(newFavorite);
  };

  return (
    <>
      <Background backdropPath={result.backdropPath} />
      <Section>
        <Wrapper>
          <S.Container>
            <S.Poster
              src={result.posterPath}
              alt="movie main poster for laptop"
              ref={img => zoom.attach(img)}
              data-zoom-src={result.posterPath.replace(/w500/, 'original')}
            />
            <S.Intro>
              <S.TitleContainer>
                <S.Title>{result.title}</S.Title>
                <S.ReleaseDate>{result.releaseDate}</S.ReleaseDate>
              </S.TitleContainer>
              <S.Favorite type="button" onClick={onClickFavorite}>
                <span>{isFavorite ? 'Unfavorite' : 'Favorite'}</span>
                {isFavorite ? <DislikeIcon /> : <LikeIcon />}
              </S.Favorite>
              <S.Info>
                <StarRatings
                  rating={result.rating / 2}
                  starRatedColor="#dd2c00"
                  numberOfStars={5}
                  starDimension="23px"
                  starSpacing="2px"
                />
                <span>({result.rating * 10}%)</span>
                <span>{result.genres}</span>
                <span>{result.runtime}</span>
              </S.Info>
              <S.Divider />
              {result.overview ? <S.OverviewTitle>Overview</S.OverviewTitle> : ""}
              <S.Tagline>{result.tagline}</S.Tagline>
              <S.Overview>{result.overview}</S.Overview>
            </S.Intro>
          </S.Container>
        </Wrapper>
      </Section>
    </>
  );
};

export default DetailLaptopIntro;
