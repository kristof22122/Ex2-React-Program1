import axios from "axios";

const apiKey = 'pub_346471405f84e3b248b0d782dcca38b30d6a';

const BASE_URL = `https://newsdata.io/api/1/news`;

export const getNews = (q, category, language, page) => {
  return axios.get(`${BASE_URL}?apikey=${apiKey}${q ? `&q=${q}` : ''}&category=${category}&language=${language}&page=${page}`)
  .then(res => {
    return res.data.results;
  })
  .catch(err => {
    console.log('Error', err.message);
  });
};
