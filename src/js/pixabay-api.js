import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = "39225038-2ac54e14fe4534aeff5d9228c";

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}