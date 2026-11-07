import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import './css/styles.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = form.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'Please enter a search word!',
      position: 'topRight',
    });

    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(response => {
      const images = response.data.hits;

      if (images.length === 0) {
        iziToast.error({
          message:
                'Sorry, there no images matching your search query. Please try again!',
            backgroundColor: '#ef4040',
            messageColor: '#fafafb',
          position: 'topRight',
        });

        return;
      }

      createGallery(images);
    })
    .catch(error => {
      iziToast.error({
        message: 'Something went wrong. Please try again!',
        position: 'topRight',
      });

      console.error('Request error:', error);
    })
    .finally(() => {
      hideLoader();
    });
});