
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryElement = document.querySelector(".gallery");

function gallery(array){
  const list = array.map(({ preview, original, description } = {}) => {
    return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
        
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    </li>`;
  })
  .join("");
  galleryElement.insertAdjacentHTML("beforeend", list);
}

gallery(galleryItems);

var simpleLightBox = new SimpleLightbox("a", {
    captionsData: "alt",
    captionDelay: 250,
});
