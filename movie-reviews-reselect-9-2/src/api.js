import axios from "axios";

const apiKey = 'a136e7106d10df282c8d3e976e1150ea';

const BASE_URL = `https://api.themoviedb.org/3/`;

const baseApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: apiKey,
  },
});

export const trendingMovies = (page = 1) => {
  return baseApi.request({
    url: 'trending/movie/week',
    params: {
      page,
    }
  })
  .then(res => {
    return res.data.results;
  })
  .catch(err => {
    console.log('Error', err.message);
  });
};

const handlerRequest = (newRequest) => {
  return newRequest.then(res => {
    return res.data;
  })
  .catch(err => {
    console.log('Error', err.message);
  })
};

export const baseMovieRequest = (id) => {
  const movieRequest = baseApi.request({
    url: `movie/${id}`,
  });

  return handlerRequest(movieRequest);
};

export const castMovieRequest = (id) => {
  const castRequest = baseApi.request({
    url: `movie/${id}/credits`,
  });

  return handlerRequest(castRequest);
};

export const reviewMovieRequest = (id) => {
  const reviewRequest = baseApi.request({
    url: `movie/${id}/reviews`,
  });

  return handlerRequest(reviewRequest);
};
