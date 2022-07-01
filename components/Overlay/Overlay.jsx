import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { close } from 'store/modules/overlay';
import * as S from './Overlay.style';

const Overlay = () => {
  const { isOpen } = useSelector(state => state.overlay);
  const dispatch = useDispatch();

  const onClickLink = () => {
    dispatch(close());
  };

  return (
    <S.Overlay open={isOpen}>
      <S.UL>
        <S.LI>
          <Link to="/around" onClick={onClickLink}>
            Home
          </Link>
        </S.LI>
        <S.LI>
          <Link to="/favorites" onClick={onClickLink}>
            Favorites
          </Link>
        </S.LI>
        <S.LI>
          <Link to="/about" onClick={onClickLink}>
            About
          </Link>
        </S.LI>
      </S.UL>
    </S.Overlay>
  );
};

export default Overlay;
