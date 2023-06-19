import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
console.log(gallery);

const li = galleryItems.map(({ preview, original, description }) => {
  return `
      <li class="js-item item">
        <img class="js-photo photo" src="${preview}" data-src="${original}" alt="${description}"/>
      </li>`
}).join("");
console.log(li);

gallery.insertAdjacentHTML("beforeend", li);

// gallery.addEventListener("click", onShowImg);

// function onShowImg(event) {
//   const mainPhoto = event.target
// }