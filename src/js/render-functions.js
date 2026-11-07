import SimpleLightbox from 'simplelightbox';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
        <li class="gallery-item">
          <a href="${image.largeImageURL}">
            <img
              src="${image.webformatURL}"
              alt="${image.tags}"
            />
          </a>
    <div class="image-info">
    <div class="info-item">
    <span>Likes</span>
    <b>${image.likes}</b>
    </div>
    <div class="info-item">
    <span>Views</span>
    <b>${image.views}</b>
    </div>
    <div class="info-item">
    <span>Comments</span>
    <b>${image.comments}</b>
    </div>
    <div class="info-item">
    <span>Downloads</span>
    <b>${image.downloads}</b>
    </div>
    </div>
        </li>
      `
    ).join('');

  gallery.innerHTML = markup;

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}