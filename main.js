import './style.css';
import { products } from './src/data/products';
import { createHeader } from './src/components/header/header';
import {
  gallerySection,
  renderGallery
} from './src/components/Gallery/Gallery';
import { renderFilters } from './src/components/Filters/Filters';

const divApp = document.querySelector('#app');

createHeader();
renderFilters(divApp);
divApp.append(gallerySection);
renderGallery(products);

const sellerSelect = document.querySelector('#sellerSearch');
const filterBySeller = (e) => {
  console.log(e.target.value);
  if (e.target.value === 'Todos') {
    renderGallery(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.artist === e.target.value
    );
    renderGallery(filteredProducts);
  }
};
sellerSelect.addEventListener('change', filterBySeller);
