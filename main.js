import './style.css';
import { products } from './src/data/products';
import { createHeader } from './src/components/header/header';
import {
  gallerySection,
  renderGallery
} from './src/components/Gallery/Gallery';
import {
  filterBySeller,
  renderFilters,
  searchByPrice
} from './src/components/Filters/Filters';

const divApp = document.querySelector('#app');

createHeader();
renderFilters(divApp);
divApp.append(gallerySection);
renderGallery(products);

const sellerSelect = document.querySelector('#sellerSearch');

sellerSelect.addEventListener('change', filterBySeller);

const priceSearchButton = document.querySelector('#searchByPrice');

priceSearchButton.addEventListener('click', searchByPrice);
