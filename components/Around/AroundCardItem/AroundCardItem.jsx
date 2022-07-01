import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './AroundCardItem.style';
import StarRatings from 'react-star-ratings';

const AroundCardItem = ({ movie }) => {

  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem(movie.id) !== null,
  );

  const onClickFavorite = () => {
    const newFavorite = localStorage.getItem(movie.id) === null;
    if (newFavorite) {
      localStorage.setItem(
        movie.id,
        JSON.stringify({
          id: movie.id,
          title: movie.title,
          posterPath: movie.posterPath,
          releaseDate: movie.releaseDate,
          rating: movie.rating,
          overview: movie.overview,
        }),
      );
    } else {
      localStorage.removeItem(movie.id);
    }
    setIsFavorite(newFavorite);
  };

  return (
    <S.GridItem key={movie.id}>
      <S.Favorite type="button" onClick={onClickFavorite} isFavorite={isFavorite}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}</S.Favorite>
      <S.Card
        backdropPath={movie.backdropPath}
      />
      <S.Content>
        <Link to={`/detail/${movie.id}`}><span>{movie.title}</span></Link>
        <S.RatingContainer>
          <StarRatings
            rating={movie.rating / 2}
            starRatedColor="#dd2c00"
            numberOfStars={5}
            starDimension="18px"
            starSpacing="1px"
          />
          <span>({movie.rating * 10}%)</span>
        </S.RatingContainer>
        <span>{movie.releaseDate}</span>
      </S.Content>
      <Link to={`/detail/${movie.id}`}>
        <S.MoreInfoBtn>More Info</S.MoreInfoBtn>
      </Link>
    </S.GridItem >
  );
};

AroundCardItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    backdropPath: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    releaseDate: PropTypes.string,
  }).isRequired,
};

export default AroundCardItem;
