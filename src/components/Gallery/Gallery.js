import { createCard } from '../card/Card';
import './Gallery.css';
export const gallerySection = document.createElement('section');
gallerySection.classList.add('gallery-section', 'flex-container');
export const renderGallery = (arrayOfProducts) => {
  gallerySection.innerHTML = '';
  for (const product of arrayOfProducts) {
    createCard(gallerySection, product);
  }
};
