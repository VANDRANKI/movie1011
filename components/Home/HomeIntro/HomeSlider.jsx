import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Link } from 'react-router-dom';
import LocationDisplay from 'utils/locationDisplay';
import * as S from './HomeSlider.style';

const DetailSimilars = () => {
    const { result } = useSelector(state => state.intro);

    const params = {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            240: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 3,
            },
            500: {
                slidesPerView: 4,
            },
            680: {
                slidesPerView: 5,
            },
            820: {
                slidesPerView: 6,
            },
            980: {
                slidesPerView: 7,
            },
            1280: {
                slidesPerView: 8,
            },
            1600: {
                slidesPerView: 9,
            },
            1900: {
                slidesPerView: 10,
            },
        },
    };

    return (
        <>
            <S.Container>
                <Swiper {...params}>
                    {result.images &&
                        result.images.map(image => (
                            <Link
                                key={image.id}
                                to={`/detail/${image.id}`}
                            >
                                <div>
                                    <S.PosterImg src={image.posterPath} alt="trending movies poster of this week" />
                                    <S.TitleBox>
                                        <S.PosterTitle>{image.title}</S.PosterTitle>
                                    </S.TitleBox>

                                </div>
                            </Link>
                        ))}
                </Swiper>
            </S.Container>
            <LocationDisplay />
        </>
    );
};

export default DetailSimilars;
