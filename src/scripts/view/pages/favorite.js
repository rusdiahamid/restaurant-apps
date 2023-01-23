import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantsShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate()
  },

  async afterRender() {
    new FavoriteRestaurantsShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });

    // const loadingEl = document.getElementById('animated-loader');

    // function showSpinner() {
    //   loadingEl.classList.add('display');
    // }

    // function hideSpinner() {
    //   loadingEl.style.display = 'none';
    // }

    // try {
    // showSpinner();
    // const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    // const restaurantContainer = document.querySelector('#restaurants');
    // const blankContainer = document.querySelector('#blank_page');

    // if (restaurants.length === 0) {
    //   blankContainer.innerHTML = emptyFavoritTemplate();
    // } else {
    // restaurants.forEach((restaurant) => {
    //   restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    // });
    // }
    // hideSpinner();
    // } catch (err) {
    //   const blankContainer = document.querySelector('#blank_page');
    //   blankContainer.innerHTML = offlineTemplate();
    //   // hideSpinner();
    // }
  },
};

export default Favorite;
