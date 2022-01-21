import axios from "axios";

const apiKey = 'pub_346471405f84e3b248b0d782dcca38b30d6a';

const BASE_URL = `https://newsdata.io/api/1/news`;

const baseApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: apiKey,
  },
});

export const getNews = (q = '', category, language, page) => {
  return baseApi.request({
    params: {
      q,
      category,
      language,
      page,
    },
  })
  .then(res => {
    return res.data.results;
  })
  .catch(err => {
    console.log('Error', err.message);
  });
};

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
