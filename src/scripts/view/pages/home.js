import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, offlineTemplate, spinner } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <hero-section></hero-section>
    <div class="content">
      ${spinner()}
      <h1 class="main__title">Explore Restaurant</h1>
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
      const restaurants = await RestaurantSource.listResto();
      const restaurantContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      hideSpinner();
    } catch (err) {
      const blankContainer = document.querySelector('#blank_page');
      blankContainer.innerHTML = offlineTemplate();
      hideSpinner();
    }
  },
};

export default Home;
