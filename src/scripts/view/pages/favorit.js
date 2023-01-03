import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate, emptyFavoritTemplate } from '../templates/template-creator';

const Favorit = {
  async render() {
    return `
    <div class="content">
      <h1 class="main__title">My Favorit Restaurant</h1>
      <div id="restaurants"></div>
      <div id="blank_page"></div>
    </div>
    `;
  },

  async afterRender() {
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
  },
};

export default Favorit;
