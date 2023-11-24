import './style.css';
import { products } from './src/data/products';
import { createHeader } from './src/components/header/header';
import {
  gallerySection,
  renderGallery
} from './src/components/Gallery/Gallery';
import {
  clearFilters,
  filterProducts,
  renderFilters
} from './src/components/Filters/Filters';

const divApp = document.querySelector('#app');

createHeader();
renderFilters(divApp);
divApp.append(gallerySection);
renderGallery(products);

export const priceInput = document.querySelector('#maxPrice');
export const sellerSelect = document.querySelector('#sellerSearch');

sellerSelect.addEventListener('change', filterProducts);

const priceSearchButton = document.querySelector('#searchByPrice');
priceSearchButton.addEventListener('click', filterProducts);

const clearFilterButton = document.querySelector('#clearSearch');
clearFilterButton.addEventListener('click', clearFilters);
