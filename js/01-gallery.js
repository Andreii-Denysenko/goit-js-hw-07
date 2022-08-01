import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const addMurkup = createImageMurkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", addMurkup);

function createImageMurkup(galleryItems) {
return galleryItems
.map(({preview, original, description})=>{
    return  `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
    </div>
    ` 
})
.join("");
};
// вешаем слушатель собитий
galleryContainer.addEventListener("click", onModal);

function onModal(evt){
    evt.preventDefault();

    let instance = basicLightbox.create(`
    <img src='${evt.target.dataset.source}' width="800" height="600">`,
    {
        onShow: (instance) => {
          window.addEventListener("keydown", onCloseEsc);
        },
        onClose: (instance) => {
          window.removeEventListener("keydown", onCloseEsc);
        },
      }
    );
    function onCloseEsc(evt) {
      if (evt.code === "Escape") {
        instance.close();
      } else {
        return;
      }
    }
instance.show();
return instance;
};
