import axios from 'axios';

const key = '24272782-2e31856ae9ebcdb26ff6a0bfb';
const BASE_URL = `https://pixabay.com/api/?key=${key}`;

let axiosRequest = null;

export const request = async (url, page = 1) => {
  if (axiosRequest) {
    axiosRequest.cancel();
  };

  axiosRequest = axios.CancelToken.source();

  try {
    const res = await axios.get(`${BASE_URL}&q=${url}&page=${page}&per_page=12&image_type=photo`,
      { cancelToken: axiosRequest.token });
    return res.data;
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log('Previous request canceled, new request is send');
    } else {
      console.log('Handle error');
    };
  }
}
