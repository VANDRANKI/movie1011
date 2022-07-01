import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, loaderColor } from 'styles/variables';
import Loader from 'components/Loader/Loader';
import { aroundActions } from 'store/modules/around';
import { AROUND_POPULAR } from 'utils/constants';
import LocationDisplay from 'utils/locationDisplay';
import useComponentWillMount from 'hooks/useComponentWillMount';
import AroundCardItem from '../AroundCardItem/AroundCardItem';
import * as S from './AroundCardList.style';

const AroundCardList = () => {
  const { aroundSuccess, result } = useSelector(state => state.around);
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[aroundActions.TYPE];
  const dispatch = useDispatch();

  useComponentWillMount(() => {
    dispatch(aroundActions.request({ TYPE: AROUND_POPULAR }));
  });

  return !isLoading ? (
    <>
      <section>
        <Wrapper>
          <S.GridContainer>
            <S.Grid>
              {aroundSuccess
                ? result.map((movie, id) => <AroundCardItem key={id} movie={movie} />)
                : null}
            </S.Grid>
          </S.GridContainer>
        </Wrapper>
      </section>
      <LocationDisplay />
    </>
  ) : (
      <S.LoaderContainer>
        <Loader color={loaderColor} />
      </S.LoaderContainer>
    );
};

export default AroundCardList;
