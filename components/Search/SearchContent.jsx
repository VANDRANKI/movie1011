import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import useDebounce from 'hooks/useDebounce';
import useComponentDidMount from 'hooks/useComponentDidMount';
import useComponentWillMount from 'hooks/useComponentWillMount';
import { Wrapper, loaderColor, device } from 'styles/variables';
import { searchActions } from 'store/modules/search';
import Loader from 'components/Loader/Loader';
import LocationDisplay from 'utils/locationDisplay';
import * as S from './SearchContent.style';
import StarRatings from 'react-star-ratings';

const SearchContent = () => {

  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef();
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[searchActions.TYPE];
  const { searchSuccess, result } = useSelector(state => state.search);
  const debouncedValue = useDebounce(searchValue, 700);
  const dispatch = useDispatch();
  const isTabletPortrait = useMediaQuery({ query: device.TabletPortrait });
  const isLaptops = useMediaQuery({ query: device.Laptops });

  const onChangeInput = e => {
    setSearchValue(e.target.value);
  };

  useComponentDidMount(() => {
    inputRef.current.focus();
  });

  useComponentWillMount(() => {
    dispatch(searchActions.request({ movie: '' }));
  });

  useEffect(() => {
    dispatch(searchActions.request({ movie: debouncedValue }));
  }, [debouncedValue, dispatch]);

  const renderSearchResult = () => {
    if (isLoading) {
      return (
        <S.LoaderContainer>
          <Loader color={loaderColor} />
        </S.LoaderContainer>
      );
    }
    if (searchSuccess) {
      return (
        <S.Result>
          {result.map(movie => (
            <>
              <S.Item to={`/detail/${movie.id}`} key={movie.id} >
                <S.Poster src={movie.posterPath} alt="movie main poster" />
                {movie.title}&nbsp;
                ({movie.releaseDate})
                {isLaptops ? (
                  <StarRatings
                    rating={movie.rating / 2}
                    starRatedColor="#e65100"
                    numberOfStars={5}
                    starDimension="22px"
                    starSpacing="2px"
                  />
                ) : (
                    <>
                      {
                        isTabletPortrait ?
                          (
                            <StarRatings
                              rating={movie.rating / 2}
                              starRatedColor="#e65100"
                              numberOfStars={5}
                              starDimension="15px"
                              starSpacing="2px"
                            />
                          ) : (
                            <StarRatings
                              rating={movie.rating / 2}
                              starRatedColor="#e65100"
                              numberOfStars={5}
                              starDimension="10px"
                              starSpacing="1px"
                            />
                          )}
                    </>
                  )}
                <span>({movie.rating * 10}%)</span>
              </S.Item>
            </>
          ))}
        </S.Result>
      );
    }
    return null;
  };

  return (
    <>
      <S.BackgroundImage />
      <Wrapper>
        <S.Container>
          <S.Title>Welcome to Movieholic</S.Title>
          <S.Input
            onChange={onChangeInput}
            type="text"
            placeholder="What kind of movie are you looking for?"
            ref={inputRef}
          />
          {renderSearchResult()}
        </S.Container>
      </Wrapper>
      <LocationDisplay />
    </>
  );
};

export default SearchContent;
