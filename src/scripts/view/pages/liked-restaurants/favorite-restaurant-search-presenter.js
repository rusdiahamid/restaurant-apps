class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurants }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchRestaurants(event.target.value);
    });
  }

  _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery;
    this._favoriteRestaurants.searchRestaurants(this._latestQuery);
  }

  _showFoundRestaurants(restaurants) {
    const html = restaurants.reduce(
      (carry, restaurant) => carry.concat(`
      <li class="restaurant"></li>
      <span class="restaurant__name">${restaurant.name || '-'}</span>
      `
      ),
      '',
    );
    document.querySelector('.restaurants').innerHTML = html;
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;