import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from 'styles/variables';
import * as S from './DetailIntro.style';
import { Section, Container } from '../Detail.style';
import '../DetailImages/swiper.css';

const DetailIntro = () => {
  const { result } = useSelector(state => state.detail);
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem(result.id) !== null,
  );

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
      <S.Background backdropPath={result.backdropPath} />
      <Section>
        <Wrapper>
          <Container>
            <S.Poster src={result.posterPath} alt="movie main poster" />
            <S.Title>{result.title}</S.Title>
            <S.ReleaseDate>{result.releaseDate}</S.ReleaseDate>
            <S.Info>
              <span>{result.rating * 10}%</span>
              <span>{result.genres}</span>
              <span>{result.runtime}</span>
            </S.Info>
            <S.Favorite type="button" onClick={onClickFavorite}>
              <span>
                {isFavorite ? 'Unfavorite' : 'Favorite'}
              </span>
              {isFavorite ? <S.DislikeIcon /> : <S.LikeIcon />}
            </S.Favorite>
            <S.Divider />
            {result.overview ? <S.OverviewTitle>Overview</S.OverviewTitle> : ""}
            {result.tagline && <S.Tagline>{result.tagline}</S.Tagline>}
            <S.OverviewContent>{result.overview}</S.OverviewContent>
          </Container>
        </Wrapper>
      </Section>
    </>
  );
};

export default DetailIntro;
