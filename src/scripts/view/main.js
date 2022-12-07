import data from '../data/DATA.json';
import '../component/restaurant-list';

const main = () => {
  const menu = document.querySelector('#menu');
  const body = document.querySelector('body');
  const main = document.querySelector('main');
  const drawer = document.querySelector('nav-bar');

  menu.addEventListener('click', (event) => {
    drawer.classList.toggle('open');
    event.stopPropagation();
  });

  body.addEventListener('click', () => {
    drawer.classList.remove('open');
  });

  main.addEventListener('click', () => {
    drawer.classList.remove('open');
  });

  const restoListElement = document.querySelector('restaurant-list');
  restoListElement.restaurants = data.restaurants;
};

export default main;
