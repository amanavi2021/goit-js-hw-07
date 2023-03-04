import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryRef = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML('afterbegin',markup);

galleryRef.addEventListener('click',onGalleryItemClick);

function createGalleryMarkup(images){
    return images.map(({preview, original, description}) => {
     return `<div class='gallery__item'>
     <a class='gallery__link'  href=${original}>
     <img
     class='gallery__image'
     src=${preview}
     data-source=${original}
     alt=${description}
     />
     </a>
     </div>`
    }).join('');
}

function onGalleryItemClick(e) {
    e.preventDefault()
    if(e.target.nodeName !== 'IMG') {
        return;
    };

    showModal(e.target.dataset.source);
    
}

function showModal(src) {
    basicLightbox.create(`
    <img width="1400" height="900" src=${src}>
`).show();
window.addEventListener('keydown', onEscKeyPress);

}

function onEscKeyPress(e) { 
    const ESC_KEY_CODE='Escape';
    if(e.code === ESC_KEY_CODE) {
    closeModal();    
    };
   
}

function closeModal() {
    const instance = document.querySelector('.basicLightbox');
    instance.classList.remove('basicLightbox--visible');
    window.removeEventListener('keydown', onEscKeyPress);
    
 }