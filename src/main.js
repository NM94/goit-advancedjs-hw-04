import { getImagesByQuery } from "./js/pixabay-api.js";

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";
import "./css/styles.css";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let currentQuery = "";
let page = 1;
let totalHits = 0;

form.addEventListener("submit", handleSearch);
loadMoreBtn.addEventListener("click", handleLoadMore);

async function handleSearch(event) {
  event.preventDefault();

  currentQuery = form.elements["search-text"].value.trim();

  if (currentQuery === "") {
    iziToast.warning({
      message: "Please enter a search word!",
      position: "topRight",
    });

    return;
  }

  page = 1;

  clearGallery();
  hideLoadMoreButton();

  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    const images = data.hits;
    totalHits = data.totalHits;

    if (images.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        backgroundColor: "#ef4040",
        messageColor: "#fafafb",
        position: "topRight",
      });

      return;
    }

    createGallery(images);

    page += 1;

    if (images.length < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again!",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}

async function handleLoadMore() {
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    const images = data.hits;

    if (images.length === 0) {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you are at the end of the search results.",
        position: "topRight",
      });

      return;
    }

    createGallery(images);

    page += 1;

    const galleryItem = document.querySelector(".gallery-item");

    if (galleryItem) {
      const cardHeight = galleryItem.getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
      });
    }

    if (page * 15 > totalHits) {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you are at the end of the search results.",
        position: "topRight",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again!",
      position: "topRight",
    });

    showLoadMoreButton();
  } finally {
    hideLoader();
  }
}
