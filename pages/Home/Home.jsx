import React from 'react';
import { HomeIntro, HomeSlider } from 'components/Home/index';
import Header from 'components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { introActions } from 'store/modules/intro';
import Loader from 'components/Loader/Loader';
import { loaderColor, secondaryColor, Layout } from 'styles/variables';
import useComponentWillMount from 'hooks/useComponentWillMount';
import * as S from './Home.style';

const Home = () => {
  const { result } = useSelector(state => state.intro);
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[introActions.TYPE];
  const dispatch = useDispatch();

  useComponentWillMount(() => {
    dispatch(introActions.request());
  });

  return !isLoading ? (
    <Layout>
      <Header color={secondaryColor} />
      <S.Main>
        <HomeIntro />
        <S.Background backdropPath={result.backdropPath} />
        <HomeSlider />
      </S.Main>
    </Layout>
  ) : (
      <S.LoaderContainer>
        <Loader color={loaderColor} />
      </S.LoaderContainer>
    );
};

export default Home;
