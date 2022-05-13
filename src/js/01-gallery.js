// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const galleryImages = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
    return `
   <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
      style="display:block"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
    </a>
  </div>
      `;
  };
  
  const createGalleryContainer = galleryItems.map(createGalleryItem).join('');
  
  galleryImages.insertAdjacentHTML('beforeend', createGalleryContainer);

  let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });