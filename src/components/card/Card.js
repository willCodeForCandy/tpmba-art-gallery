import './Card.css';

export const createCard = (
  parent,
  { url, name, reviews, artist, price, stars }
) => {
  const card = document.createElement('article');
  card.classList.add('product-card');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('product-img-container');
  const productImg = document.createElement('img');
  productImg.src = url;
  productImg.alt = name;
  imgContainer.append(productImg);
  const productDescription = document.createElement('div');
  productDescription.classList.add('product-description');
  const productName = document.createElement('h3');
  productName.textContent = name;
  const productPrice = document.createElement('p');
  productPrice.textContent = `${price}€`;
  productPrice.classList.add('product-price');
  const productRatings = document.createElement('div');
  productRatings.className = 'product-rating';

  for (let i = 1; i <= 5; i++) {
    const contenedorEstrella = document.createElement('span');
    contenedorEstrella.className = 'star';
    const starImg = document.createElement('img');
    if (i <= stars) {
      starImg.src = '/assets/star-yellow.svg';
    } else {
      starImg.src = '/assets/star-grey.svg';
    }
    contenedorEstrella.appendChild(starImg);
    productRatings.appendChild(contenedorEstrella);
  }

  const productReviews = document.createElement('p');
  productReviews.textContent = `(${reviews})`;
  productRatings.append(productReviews);
  const seller = document.createElement('p');
  seller.innerHTML = `Creado por <strong>${artist}</strong>`;
  seller.classList.add('seller');
  productDescription.append(productName, productPrice, productRatings, seller);
  card.append(imgContainer, productDescription);
  parent.append(card);
};
