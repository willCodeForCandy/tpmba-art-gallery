import './Header.css';

export const createHeader = () => {
  const header = document.createElement('header');
  header.className = 'flex-container';
  const logo = document.createElement('img');
  logo.src = './public/assets/logo.png';
  logo.alt = 'Logo galería de arte';
  header.appendChild(logo);
  const title = document.createElement('h1');
  title.innerText = 'Galería de Arte';
  header.appendChild(title);
  document.body.prepend(header);
};
