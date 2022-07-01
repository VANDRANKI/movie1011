import React, { useReducer, useState } from 'react';
import { Wrapper } from 'styles/variables';
import * as S from './FavoritesList.style';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const getFavorites = () => {

  const favorites = [];
  for (const [key, value] of Object.entries(localStorage)) {
    if (!Number.isSafeInteger(Number(key))) continue;
    favorites.push(JSON.parse(value));
  }
  return favorites;
};

const FavoritesList = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const favorites = getFavorites();

  const onClickRemove = e => {
    const { id } = e.target.dataset;
    localStorage.removeItem(id);
    forceUpdate();
  };

  function setOverview(overview) {
    if (overview) {
      if (overview.length > 200) {
        return overview.slice(0, 200) + '...';
      } else {
        return overview;
      }
    }
  }

  return (
    <section>
      <Wrapper>
        <S.Title><S.MovieLogo />Your Favorite Movies</S.Title>
        <S.Container>
          <S.ItemList>
            {favorites.length ? (
              favorites.map(favorite => (
                <S.Item key={favorite.id}>
                  <S.ItemLink to={`/detail/${favorite.id}`}>
                    <S.FlipCard>
                      <S.FlipCardInner>
                        <S.FlipCardFront>
                          <img src={favorite.posterPath} alt="favorite movie poster" />
                        </S.FlipCardFront>
                        <S.FlipCardBack>
                          <S.OverviewTitle>Overview</S.OverviewTitle>
                          <S.Overview>{favorite.overview ? setOverview(favorite.overview) : 'There is no overview.'}</S.Overview>
                          <S.MoreButton>More Info</S.MoreButton>
                        </S.FlipCardBack>
                      </S.FlipCardInner>
                    </S.FlipCard>
                    <S.MovieTitle>{favorite.title}</S.MovieTitle>
                  </S.ItemLink>
                  <S.RatingContainer>
                    <StarRatings
                      rating={favorite.rating / 2}
                      starRatedColor="#dd2c00"
                      numberOfStars={5}
                      starDimension="15px"
                      starSpacing="1px"
                    />
                    <span>({favorite.rating * 10}%)</span>
                  </S.RatingContainer>
                  <S.ReleaseDate><span>{favorite.releaseDate ? favorite.releaseDate : '(0000-00-00)'}</span></S.ReleaseDate>
                  <S.RemoveButton
                    data-id={favorite.id}
                    onClick={onClickRemove}
                    type="button"
                  >
                    Unfavorite
                    <S.DislikeIcon />
                  </S.RemoveButton>
                </S.Item>
              ))
            ) : (
                <S.Message>
                  <p>Sorry, you have no favorited movies. Return to the <S.GoHomeButton><Link to="/around">Home</Link></S.GoHomeButton> to add a favorite movie.</p>

                </S.Message>
              )}
          </S.ItemList>
        </S.Container>
      </Wrapper>
    </section>
  );
};

export default FavoritesList;
