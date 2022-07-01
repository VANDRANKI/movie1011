import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Layout, loaderColor, secondaryColor, tertiaryColor, device } from 'styles/variables';
import { useSelector, useDispatch } from 'react-redux';
import { detailActions } from 'store/modules/detail';
import PropTypes from 'prop-types';
import {
  DetailIntro,
  DetailCasts,
  DetailImages,
  DetailVideos,
  DetailSimilars,
  DetailLaptopIntro,
} from 'components/Detail/index';
import Loader from 'components/Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import useComponentWillMount from 'hooks/useComponentWillMount';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import * as S from './Detail.style';

const Detail = ({ match }) => {
  const loadingState = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const { id } = match.params;
  const isLoading = loadingState[detailActions.TYPE];
  const isLaptop = useMediaQuery({ query: device.Laptops });

  useComponentWillMount(() => dispatch(detailActions.request({ id })));

  return (
    <Layout>
      <Header color={secondaryColor} bgColor={tertiaryColor} />
      <main>
        {isLoading ? (
          <S.LoaderContainer>
            <Loader color={loaderColor} />
          </S.LoaderContainer>
        ) : (
            <>
              {isLaptop ? <DetailLaptopIntro /> : <DetailIntro />}
              <DetailCasts />
              <DetailImages />
              <DetailVideos />
              <DetailSimilars />
            </>
          )}
      </main>
      <ScrollUpButton ToggledStyle={{ bottom: 75 }} />
      <Footer color={secondaryColor} bgColor={tertiaryColor} />
    </Layout>
  );
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Detail;
