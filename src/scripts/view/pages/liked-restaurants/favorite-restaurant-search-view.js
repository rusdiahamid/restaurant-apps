import { createRestaurantItemTemplate } from '../../templates/template-creator';
const feather = require('feather-icons');

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <div class="content">
      <div class="search__restaurants">
      <input id="query" type="text" placeholder="Search Restaurants..."/>
      <i class="search__icon">${feather.icons.search.toSvg()}</i>
      </div>
      <h2 class="content__heading">Your Liked Restaurant</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
      `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;

    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }


    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:searched:updated'));
  }

  // showFavoriteRestaurants(restaurants) {
  //   let html;
  //   if (restaurants.length) {
  //     html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
  //   } else {
  //     html = this._getEmptyRestaurantTemplate();
  //   }

  //   document.getElementById('restaurants').innerHTML = html;

  //   document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  // }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada Restaurant untuk ditampilkan</div>'
  }

}

export default FavoriteRestaurantSearchView;