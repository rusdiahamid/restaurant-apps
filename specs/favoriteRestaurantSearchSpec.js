import FavoriteRestaurantSearchPresenter from '../src/scripts/view/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Searching restaurant', () => {
  let presenter;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = 'film a';
    queryElement.dispatchEvent(new Event('change'));
  }

  const setRestaurantSearchContainer = () => {
    document.body.innerHTML = `
    <div id="restaurant-search-container">
      <input id="query" type="text">
      <div class="restaurant-result-container">
        <ul class="restaurants">
        </ul>
      </div>
    </div>
  `;
  };

  const constructPresenter = () => {
    spyOn(FavoriteRestaurantIdb, 'searchRestaurants');
    presenter = new FavoriteRestaurantSearchPresenter({ favoriteRestaurants: FavoriteRestaurantIdb });
  }

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  it('should be able to capture the query typed by the user', () => {
    searchRestaurants('film a');

    expect(presenter.latestQuery)
      .toEqual('film a');
  });

  it('should ask the model to search for liked restaurant', () => {
    searchRestaurants('film a');

    expect(FavoriteRestaurantIdb.searchRestaurants)
      .toHaveBeenCalledWith('film a');
  });
});