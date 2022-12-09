import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <h1 class="main__title">Explore Restaurant</h1>
    <restaurant-list></restaurant-list>
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
