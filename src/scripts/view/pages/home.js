import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <hero-section></hero-section>
    <div class="content">
      <h1 class="main__title">Explore Restaurant</h1>
      <div id="restaurants"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listResto();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
