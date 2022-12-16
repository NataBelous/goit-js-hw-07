import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function galleryHtml() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>    
      `;
    })
    .join('');
}

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', galleryHtml());

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
