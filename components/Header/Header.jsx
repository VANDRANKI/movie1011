import React from 'react';
import { Wrapper, device } from 'styles/variables';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LocationDisplay from 'utils/locationDisplay';
import Overlay from 'components/Overlay/Overlay';
import * as S from './Header.style';
import OverlayButton from './OverlayButton/OverlayButton';

const Header = ({ color, bgColor, isSearching }) => {
  const isTabletPortrait = useMediaQuery({ query: device.TabletPortrait });
  const { isOpen } = useSelector(state => state.overlay);
  const history = useHistory();

  const onClickSearchCancel = () => {
    history.goBack();
  };

  return (
    <>
      <S.Header bgColor={bgColor}>
        <Wrapper>
          <S.Container isOpen={isOpen} color={color}>
            <S.LogoLinkContainer isOpen={isOpen}>
              <Link to="/">
                <S.HeroTxt>Movieholic</S.HeroTxt>
              </Link>
            </S.LogoLinkContainer>
            <S.MenuContainer>
              {isTabletPortrait ? (
                <>
                  <S.UL>
                    <S.LI>
                      <S.A><Link to="/around">Home</Link></S.A>
                    </S.LI>
                    <S.LI>
                      <S.A><Link to="/about">About</Link></S.A>
                    </S.LI>
                    <S.LI>
                      <S.A><Link to="/favorites">Favorites</Link></S.A>
                    </S.LI>
                  </S.UL>
                  {!isSearching ? (
                    <S.SearchLinkContainer isOpen={isOpen}>
                      <Link to="/search">
                        <S.SearchIcon />
                      </Link>
                    </S.SearchLinkContainer>
                  ) : (
                      <S.SearchCancel onClick={onClickSearchCancel} type="button">
                        <S.SearchBackIcon />
                      </S.SearchCancel>
                    )}
                </>
              ) : (
                  <>
                    {!isSearching ? (
                      <S.SearchLinkContainer isOpen={isOpen}>
                        <Link to="/search">
                          <S.SearchIcon />
                        </Link>
                      </S.SearchLinkContainer>
                    ) : (
                        <S.SearchCancel onClick={onClickSearchCancel} type="button">
                          <S.Cancel>Cancel</S.Cancel>
                        </S.SearchCancel>
                      )}
                    <OverlayButton color={color} />
                  </>
                )}
            </S.MenuContainer>
          </S.Container>
          <Overlay />
        </Wrapper>
      </S.Header>
      <LocationDisplay />
    </>
  );
};

Header.defaultProps = {
  color: 'white',
  bgColor: 'transparent',
  isSearching: false,
};

Header.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  isSearching: PropTypes.bool,
};

export default Header;