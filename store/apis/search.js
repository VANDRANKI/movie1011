import {
  imagePath,
} from 'utils/constants';

import fetchData from 'utils/fetchData';
import noPoster from 'images/no-poster.jpg';

export default async function searchAPI(payload) {
  const { movie } = payload;
  if (!movie.length) return [];
  const jsonResult = await fetchData('search/movie', [`query=${movie}`]);
  const result = jsonResult.results;

  result.sort((a, b) => { return b.vote_average - a.vote_average });
  result.sort((a, b) => { return b.release_date.substring(0, 4) - a.release_date.substring(0, 4) });

  const searchResult = result.map(item => {
    let posterPath = `${imagePath.w500}${item.poster_path}`;
    if (item.poster_path === null) {
      posterPath = `${noPoster}`;
    }
    return {
      id: item.id,
      posterPath: posterPath,
      title: item.title,
      rating: item.vote_average,
      releaseDate: item.release_date ? parseInt(item.release_date, 10) : "0000",
    };
  });
  return searchResult;
}
