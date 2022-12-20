import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <hero-section></hero-section>
    <h1 class="main__title">Explore Restaurant</h1>
    <div class="content">
    <restaurant-list></restaurant-list>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listResto();
    const restaurantContainer = document.querySelector('restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
