import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const createMarcup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
}).join("");
gallery.insertAdjacentHTML("beforeend", createMarcup);
console.log(createMarcup);

var lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250,});












// gallery.addEventListener('click', onGaleryPhoto);

// console.log(gallery);
// function onGaleryPhoto(event) {
//     const { target } = event;

    // if (!target.classList.contains('gallery__image')) {
    // return;
    // }
    // console.log(target)
    // const origiImg = target.closest('.gallery__link')..href;

// var lightbox = new SimpleLightbox('.gallery a', { origiImg });

// }
// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });