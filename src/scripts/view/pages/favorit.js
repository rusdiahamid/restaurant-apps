import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createRestaurantItemTemplate, emptyFavoritTemplate, offlineTemplate, spinner,
} from '../templates/template-creator';

const Favorit = {
  async render() {
    return `
    ${spinner()}
    <div class="content">
      <h1 class="main__title">My Favorit Restaurant</h1>
      <div id="restaurants"></div>
      <div id="blank_page"></div>
    </div>
    `;
  },

  async afterRender() {
    const loadingEl = document.getElementById('animated-loader');

    function showSpinner() {
      loadingEl.classList.add('display');
    }

    function hideSpinner() {
      loadingEl.style.display = 'none';
    }

    try {
      showSpinner();
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      const restaurantContainer = document.querySelector('#restaurants');
      const blankContainer = document.querySelector('#blank_page');

      if (restaurants.length === 0) {
        blankContainer.innerHTML = emptyFavoritTemplate();
      } else {
        restaurants.forEach((restaurant) => {
          restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      }
      hideSpinner();
    } catch (err) {
      const blankContainer = document.querySelector('#blank_page');
      blankContainer.innerHTML = offlineTemplate();
      hideSpinner();
    }
  },
};

export default Favorit;
