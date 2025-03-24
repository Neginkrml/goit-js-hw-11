import axios from 'axios';

// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';

// Dokümantasyonda belirtilen import
import SimpleLightbox from 'simplelightbox';
// Stil importu
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.app-form');

const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault(); //!sayfa yenilenmesini engeller
  gallery.innerHTML = ''; //! her submitte içerik temizleniyor

  const searchValue = form.elements.search.value;
  // console.log(searchValue);
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '49510576-2403f70685e3c4d9a30d56514',
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      console.log(response);
      const images = response.data.hits;
      if (images.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        images.forEach(img => {
          console.log(img);
          gallery.innerHTML += `
           <li class="gallery-item">
      <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" />
      </a>
            <div class="content">
              <div class="info">
                <h5 class="key">Likes</h5>
                <p class="value">${img.likes}</p>
              </div>
              <div class="info">
                <h5 class="key">Views</h5>
                <p class="value">${img.views}</p>
              </div>
              <div class="info">
                <h5 class="key">Comments</h5>
                <p class="value">${img.comments}</p>
              </div>
              <div class="info">
                <h5 class="key">Downloads</h5>
                <p class="value">${img.downloads}</p>
              </div>
            </div>
          </li>`;
        });
        const lightbox = new SimpleLightbox('.gallery a', {
          /* options */
        });
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.error(error);
    });
});
