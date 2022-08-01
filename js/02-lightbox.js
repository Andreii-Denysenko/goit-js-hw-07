import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector('.gallery');
const addMurkup = createImageMurkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", addMurkup);

function createImageMurkup(galleryItems) {
return galleryItems
.map(({preview, original, description})=>{
    return`
    <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
})
.join("");
};