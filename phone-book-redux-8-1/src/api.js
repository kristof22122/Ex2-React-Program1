import axios from 'axios';

const BASE_URL = 'https://api.m3o.com/v1/db';
const M3O_API_TOKEN = 'YTEzODE3YmItMWYwOS00MGVkLTlmYzYtZWVlOWM0YzAwYmQw';
const table ='contact';

const baseApiRequest = (url, data) => {
  return axios({
    method: 'post',
    baseURL: BASE_URL,
    url,
    headers: {
      Authorization: 'Bearer ' + M3O_API_TOKEN,
      'Content-Type': 'application/json',
    },
    data,
  });
};

export const requestRead = () => {
  return baseApiRequest('/Read', { table })
    .then(res => {
      return res.data;
    })
};

export const requestCreate = (record) => {
  return baseApiRequest('/Create', {
    table,
    record,
  });
};

export const requestDelete = (id) => {
  return baseApiRequest('/Delete', {
    table,
    id,
  });
};

export const requestUpdate = (record) => {
  return baseApiRequest('/Update', {
    table,
    record,
  });
};
