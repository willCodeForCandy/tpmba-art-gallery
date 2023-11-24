import { priceInput, sellerSelect } from '../../../main';
import { products } from '../../data/products';
import { renderGallery } from '../Gallery/Gallery';
import './Filters.css';

const appliedFiltersContainer = document.createElement('div');
const priceSearchTag = document.createElement('div');
priceSearchTag.classList.add('filter-tag', 'hidden');
appliedFiltersContainer.append(priceSearchTag);
const sellerSearchTag = document.createElement('div');
sellerSearchTag.classList.add('filter-tag', 'hidden');
appliedFiltersContainer.append(sellerSearchTag);

export const renderFilters = (parentElement) => {
  const filterSection = document.createElement('section');
  // filterSection.classList.add('filter-section', 'flex-container');
  filterSection.innerHTML = `<div class = "filter-section flex-container">
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
      </div></div>`;
  parentElement.append(filterSection);

  appliedFiltersContainer.classList.add('applied-filters', 'flex-container');
  filterSection.append(appliedFiltersContainer);

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

export const filterProducts = () => {
  let filteredProducts = [];
  const hasPriceSearch = priceInput.value ? true : false;
  const hasSellerSearch = sellerSelect.value === 'Todos' ? false : true;
  if (hasSellerSearch && hasPriceSearch) {
    filteredProducts = products.filter(
      (product) =>
        product.price <= priceInput.value &&
        product.artist === sellerSelect.value
    );
    priceSearchTag.innerText = `Precio máximo: ${priceInput.value}€`;
    priceSearchTag.classList.remove('hidden');

    sellerSearchTag.innerText = `Artista: ${sellerSelect.value}`;
    sellerSearchTag.classList.remove('hidden');
  } else if (hasSellerSearch && !hasPriceSearch) {
    filteredProducts = products.filter(
      (product) => product.artist === sellerSelect.value
    );

    priceSearchTag.classList.add('hidden');

    sellerSearchTag.innerText = `Artista: ${sellerSelect.value}`;
    sellerSearchTag.classList.remove('hidden');
  } else if (!hasSellerSearch && hasPriceSearch) {
    filteredProducts = products.filter(
      (product) => product.price <= priceInput.value
    );
    priceSearchTag.innerText = `Precio máximo: ${priceInput.value}€`;
    priceSearchTag.classList.remove('hidden');

    sellerSearchTag.classList.add('hidden');
  } else {
    filteredProducts = products;
    priceSearchTag.classList.add('hidden');
    sellerSearchTag.classList.add('hidden');
  }
  renderGallery(filteredProducts);
};

export const clearFilters = () => {
  priceInput.value = '';
  sellerSelect.value = 'Todos';
  renderGallery(products);
  priceSearchTag.classList.add('hidden');
  sellerSearchTag.classList.add('hidden');
};
