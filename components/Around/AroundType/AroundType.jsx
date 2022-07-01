import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper } from 'styles/variables';
import { aroundList } from 'utils/constants';
import { aroundActions } from 'store/modules/around';
import * as S from './AroundType.style';

const AroundType = () => {

  const [isState, setIsState] = useState('cur');
  const dispatch = useDispatch();

  const onClickItem = e => {
    const { idx } = e.target.dataset;
    const { type, state } = aroundList[idx];

    setIsState(state);
    dispatch(aroundActions.request({ TYPE: type }));
  };

  return (
    <section>
      <Wrapper>
        <S.Title><S.MovieLogo />Movieholic</S.Title>
        <S.UL>
          {aroundList.map((item, idx) => (
            <S.LI
              currentState={isState}
              state={item.state}
              key={item.text + item.state}
              onClick={onClickItem}
              data-idx={idx}
            >
              {item.text}
            </S.LI>
          ))}
        </S.UL>
      </Wrapper>
    </section>
  );
};


export default AroundType;
