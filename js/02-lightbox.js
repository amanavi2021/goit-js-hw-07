import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML('afterbegin',markup);

let gallery = new SimpleLightbox('.gallery a', {captions:true, captionSelector:'img', captionType:'attr', captionsData:'alt',captionPosition:'bottom', captionDelay:250});

function createGalleryMarkup(images){
    return images.map(({preview, original, description}) => {
     return `<li class='gallery__item'>
     <a class='gallery__link' href=${original}>
     <img
     class='gallery__image'
     src=${preview}
     alt=${description}
     />
     </a>
     </li>
     `
    }).join('');
}


