import { priceInput, sellerSelect } from '../../../main';
import { products } from '../../data/products';
import { renderGallery } from '../Gallery/Gallery';
import './Filters.css';

export const renderFilters = (parentElement) => {
  const filterSection = document.createElement('section');
  filterSection.classList.add('filter-section', 'flex-container');
  filterSection.innerHTML = `
    <h2>Filtrar productos</h2>
    <button id="clearSearch">Borrar filtros</button>
    <div class="filter flex-container">
      <h3>Precio máximo</h3>
      <div>
      <input type="number" name="maxPrice" id="maxPrice">
      <button id="searchByPrice">Buscar</button>
      </div>
    </div>
    <div class="filter flex-container">
      <h3>Vendedor </h3>
      <select name="sellerSearch" id="sellerSearch">
        <option>Todos</option>
      </select>
    </div>`;
  parentElement.append(filterSection);
  const sellerSelect = document.querySelector('#sellerSearch');
  const sellerList = [];
  for (const product of products) {
    if (!sellerList.includes(product.artist)) {
      sellerList.push(product.artist);
    }
  }
  for (const seller of sellerList) {
    const option = document.createElement('option');
    option.innerText = seller;
    sellerSelect.append(option);
  }
};

export const filterBySeller = (e) => {
  if (e.target.value === 'Todos') {
    renderGallery(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.artist === e.target.value
    );
    renderGallery(filteredProducts);
  }
};

export const searchByPrice = () => {
  const filteredProducts = products.filter(
    (product) => product.price <= priceInput.value
  );
  renderGallery(filteredProducts);
};

export const clearFilters = () => {
  priceInput.value = '';
  sellerSelect.value = 'Todos';
  renderGallery(products);
};
