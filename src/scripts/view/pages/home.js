import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, offlineTemplate, spinner } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero-section">
      <picture>
      <source media="(max-width: 600px)" srcset="./images/heros/hero-image-small.jpg" />
      <img src="./images/heros/hero-image-large.jpg" alt="Hunger App Hero Image" />
      </picture>
      <div class="hero__inner">
      <h1 class="hero__title">Your stomach feeling hungry?</h1>
      <p class="hero__tagline">let's explore the restaurant with us</p>
      </div>
    </div>
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
