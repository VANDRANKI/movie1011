import { aroundQueries, imagePath } from 'utils/constants';
import fetchData from 'utils/fetchData';

export default async function aroundAPI(payload) {
  const rawResult = await fetchData(aroundQueries[payload.TYPE]);
  const movieList = rawResult.results;

  if (payload.TYPE === 'AROUND_UPCOMING' || payload.TYPE === 'AROUND_NOW_PLAYING') {
    movieList.sort((a, b) => {
      return parseInt((b.release_date).replaceAll("-", "")) - parseInt((a.release_date).replaceAll("-", ""))
    });
  } else if (payload.TYPE === 'AROUND_POPULAR') {
    movieList.sort((a, b) => { return b.vote_average - a.vote_average });
  }

  const result = [];
  movieList.forEach(movie => {
    if (movie.id && movie.title) {
      const obj = {};
      obj.id = movie.id;
      obj.title = movie.title;
      obj.posterPath = `${imagePath.w500}${movie.poster_path}`;
      obj.backdropPath = `${imagePath.original}${movie.backdrop_path}`;
      obj.releaseDate = movie.release_date;
      obj.rating = movie.vote_average;
      obj.overview = movie.overview;
      result.push(obj);
    }
  });
  return result;
}
