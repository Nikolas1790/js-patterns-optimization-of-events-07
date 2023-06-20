import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createMarcup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image js-gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join("");
gallery.insertAdjacentHTML("beforeend", createMarcup);


gallery.addEventListener("click", onShowImg);

function onShowImg(event) {
  const { target } = event;
  
  if (!target.classList.contains('js-gallery__image')) {
    return;
  }
 
  const origiImg = target.closest('.js-gallery__image').dataset.source;
  // const currentItem = galleryItems.find((source) =>  source === origiImg);
  

const instance = basicLightbox.create(`
    <img src="${origiImg}" width="800" height="600">
`).show();

  
}



