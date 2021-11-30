import axios from "axios";

const apiKey = 'a136e7106d10df282c8d3e976e1150ea';

const BASE_URL_TRENDING = `https://api.themoviedb.org/3/trending/`;
const BASE_URL_MOVIES = `https://api.themoviedb.org/3/movie/`;

export const baseApiRequest = async (page = 1) => {
  try {
    const res = await axios({
      baseURL: BASE_URL_TRENDING,
      url: `movie/week?api_key=${apiKey}&page=${page}`,
    });

    return res;
  } catch (err) {
    console.log('Error', err.message);
  }
};

export const movieInfoRequest = async (id = 0) => {
  try {
    const res = await axios({
      baseURL: BASE_URL_MOVIES,
      url: `${id}?api_key=${apiKey}`,
    });

    return res;
  } catch (err) {
    console.log('Error', err.message);
  }
};

export const movieCastRequest = async (id = 0) => {
  try {
    const res = await axios({
      baseURL: BASE_URL_MOVIES,
      url: `${id}/credits?api_key=${apiKey}`,
    });

    return res;
  } catch (err) {
    console.log('Error', err.message);
  }
};

export const movieReviewRequest = async (id = 0) => {
  try {
    const res = await axios({
      baseURL: BASE_URL_MOVIES,
      url: `${id}/reviews?api_key=${apiKey}`,
    });

    return res;
  } catch (err) {
    console.log('Error', err.message);
  }
};
