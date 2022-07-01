import {
  imagePath,
  YOUTUBE_PATH,
  getYoutubeThumbnail,
} from 'utils/constants';
import fetchData from 'utils/fetchData';
import noName from 'images/no-name.png';
import noPoster from 'images/no-poster.jpg';
import nobackgroundposter from 'images/nobackgroundposter.jpg';

const getMovieDetail = async id => {
  const result = await fetchData(`movie/${id}`);

  let genres = '';
  const genreList = result.genres.map(genre => genre.name);
  if (result.genres.length > 3) {
    genreList.splice(3);
  }
  genres = genreList.join(' | ');

  let posterPath = `${imagePath.w500}${result.poster_path}`;
  let backdropPath = `${imagePath.w500}${result.backdrop_path}`;
  if (result.poster_path === null) {
    posterPath = `${noPoster}`;
  }
  if (result.backdrop_path === null) {
    backdropPath = `${nobackgroundposter}`;
  }

  return {
    title: result.title,
    originalTitle: result.original_title,
    tagline: result.tagline,
    releaseDate: result.release_date ? '(' + result.release_date + ')' : '',
    runtime: `${result.runtime ? result.runtime : 0} Minutes`,
    rating: result.vote_average,
    genres,
    overview: result.overview,
    posterPath: posterPath,
    backdropPath: backdropPath,
  };
};

const getMovieImages = async id => {
  const result = await fetchData(`movie/${id}/images`);
  const images = result.backdrops.map(
    backdrop => `${imagePath.w780}${backdrop.file_path}`,
  );

  images.concat(
    result.posters.map(poster => `${imagePath.w500}${poster.file_path}`),
  );

  return images;
};

const getMovieVideos = async id => {
  let rawResult = await fetchData(`movie/${id}/videos`);
  let result = rawResult.results;

  if (!result.length) {
    rawResult = await fetchData(`movie/${id}/videos`);
    result = rawResult.results;
  }

  const youtubeVideos = result.filter(video => video.site === 'YouTube');
  const videos = youtubeVideos.map(video => ({
    path: `${YOUTUBE_PATH}${video.key}`,
    thumbnail: getYoutubeThumbnail(video.key),
  }));

  return videos;
};

const getMovieCasts = async id => {
  const rawResult = await fetchData(`movie/${id}/credits`);
  const result = rawResult.cast;

  const casts = result.map(cast => {
    let profilePath = `${imagePath.w500}${cast.profile_path}`;
    if (cast.profile_path === null) {
      profilePath = `${noName}`;
    }
    return {
      name: cast.name,
      role: cast.character,
      profilePath,
    };
  });

  return casts;
};

const getMovieSimilars = async id => {
  const rawResult = await fetchData(`movie/${id}/similar`);
  const result = rawResult.results;

  const posters = result.map(movie => {
    let posterPath = `${imagePath.w500}${movie.poster_path}`;

    if (movie.poster_path === null) {
      posterPath = `${noPoster}`;
    }
    return {
      title: movie.title,
      posterPath,
      id: movie.id,
    }
  });

  return posters;
};

export default async function detailAPI(payload) {
  const { id } = payload;
  const movieDetails = await getMovieDetail(id);
  const movieImages = await getMovieImages(id);
  const movieVideos = await getMovieVideos(id);
  const movieCasts = await getMovieCasts(id);
  const movieSimilars = await getMovieSimilars(id);

  const movie = {};
  Object.assign(movie, movieDetails);
  movie.images = movieImages;
  movie.casts = movieCasts;
  movie.videos = movieVideos;
  movie.similars = movieSimilars;
  movie.id = id;
  return movie;
}
