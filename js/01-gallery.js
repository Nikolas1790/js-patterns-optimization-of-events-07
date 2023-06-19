import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const gallery = document.querySelector('.gallery');
// console.log(gallery);

const li = galleryItems.map(({ preview, original, description }) => {
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
// console.log(li);
gallery.insertAdjacentHTML("beforeend", li);


gallery.addEventListener("click", onShowImg);

function onShowImg(event) {
  const { target } = event;
  // console.log(mainPhoto)
  if (!target.classList.contains('js-gallery__image')) {
    return;
  }
  // console.log(mainPhoto)

  const origiImg = target.closest('.js-gallery__image').dataset.source;
  const currentItem = galleryItems.find((source) =>  source === origiImg);
  console.log(origiImg)


  const instance = basicLightbox.create(`<div class="modal">
    <img  width="800" height="600" src="${origiImg}"
    />
    </div>

  
`).show();
  // instance.show();
console.log(instance)

}



// instance.show()