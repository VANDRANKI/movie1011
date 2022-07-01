import { imagePath } from 'utils/constants';
import fetchData from 'utils/fetchData';
import noPoster from 'images/no-poster.jpg';

export default async function introAPI() {

  const randomMovie = {};
  let trendingList = await fetchData('trending/movie/week');
  trendingList = trendingList.results;
  let randomMovieID = trendingList[Math.floor(Math.random() * trendingList.length)].id;

  const posters = trendingList.map(movie => {
    let posterPath = `${imagePath.w500}${movie.poster_path}`;
    if (movie.poster_path === null) {
      posterPath = `${noPoster}`;
    }
    return {
      posterPath,
      title: movie.title,
      id: movie.id,
    }
  });

  while (
    !randomMovie.backdropPath ||
    !randomMovie.title ||
    !randomMovie.tagline ||
    !randomMovie.genres
  ) {
    randomMovieID =
      trendingList[Math.floor(Math.random() * trendingList.length)].id;

    const result = await fetchData(`movie/${randomMovieID}`);

    let genres = '';
    const genreList = result.genres.map(genre => genre.name);
    if (result.genres.length > 3) {
      genreList.splice(3);
    }
    genres = genreList.join(' | ');

    randomMovie.backdropPath = `${imagePath.original}${result.backdrop_path}`;
    randomMovie.title = result.title;
    randomMovie.tagline = result.tagline;
    randomMovie.genres = genres;
    randomMovie.rating = result.vote_average;
    randomMovie.releaseDate = result.release_date;
    randomMovie.id = result.id;
  }
  const movie = {};
  Object.assign(movie, randomMovie);
  movie.images = posters;
  return movie;
}
