import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallerycontainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

gallerycontainer.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryItems(galleryItems) {
  return galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
      </a>
    </div>`
  ).join('');
}
console.log(galleryMarkup);

gallerycontainer.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

const modal = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600"/>`);
modal.show();

  gallerycontainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      modal.close();
    }
  });
}



  
