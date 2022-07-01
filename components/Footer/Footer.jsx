import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, device, MyEmail, MyLandingPage } from 'styles/variables';
import { useMediaQuery } from 'react-responsive';
import * as S from './Footer.style';
import Tooltip from "react-simple-tooltip";

const Footer = ({ color, bgColor }) => {
  const isTabletPortrait = useMediaQuery({ query: device.TabletPortrait });

  return (
    <S.Footer bgColor={bgColor} >
      <Wrapper>
        <S.Container>
          <S.SocialContainer>
            <S.FacebookIcon />
            <S.TwitterIcon />
            <S.LinkedinIcon />
          </S.SocialContainer>
          <S.Copyright color={color}>
            <S.Author>
              <S.Developer>Designed by Denis Lim.</S.Developer>
              <a href={MyEmail}>
                <S.EmailIcon />
              </a>
              <S.EducationalPurpose>For Educational Purposes Only</S.EducationalPurpose>
              <a href={MyLandingPage} target="_blank" rel='noreferrer noopener'>
                {isTabletPortrait ? (
                  <Tooltip content="Landing Page" fontSize="12px" background="#ffa726;" border="none" placement="right" arrow={10} padding={7} radius={5}>
                    <S.PortfolioIcon />
                  </Tooltip>
                ) : (
                    <Tooltip content="Landing Page" fontSize="12px" background="#ffa726;" border="none" placement="left" padding={5} radius={5}>
                      <S.PortfolioIcon />
                    </Tooltip>
                  )}
              </a>
            </S.Author>
          </S.Copyright>
        </S.Container>
      </Wrapper>
    </S.Footer>
  );
};

Footer.defaultProps = {
  color: 'white',
  bgColor: 'transparent',
};

Footer.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Footer;
