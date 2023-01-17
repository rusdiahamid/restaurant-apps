import FavoriteRestaurantSearchPresenter from '../src/scripts/view/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Searching restaurant', () => {
  let presenter;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
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
    searchRestaurants('resto a');

    expect(presenter.latestQuery)
      .toEqual('resto a');
  });

  it('should ask the model to search for liked restaurant', () => {
    searchRestaurants('resto a');

    expect(FavoriteRestaurantIdb.searchRestaurants)
      .toHaveBeenCalledWith('resto a');
  });

  it('should show the found restaurant', () => {
    presenter._showFoundRestaurants([{ id: 1 }]);
    expect(document.querySelectorAll('.restaurant').length).toEqual(1);

    presenter._showFoundRestaurants([{ id: 1, name: 'Satu' }, { id: 2, name: 'Dua' }]);
    expect(document.querySelectorAll('.restaurant').length).toEqual(2);
  });

  it('should show the name of the found restaurants', () => {
    presenter._showFoundRestaurants([{ id: 1, name: 'Satu' }]);
    expect(document.querySelectorAll('.restaurant__name').item(0).textContent)
      .toEqual('Satu');

    presenter._showFoundRestaurants(
      [{ id: 1, name: 'Satu' }, { id: 2, name: 'Dua' }]
    );

    const restaurantNames = document.querySelectorAll('.restaurant__name');

    expect(restaurantNames.item(0).textContent).toEqual('Satu');
    expect(restaurantNames.item(1).textContent).toEqual('Dua');
  });

  it('should show - for found restaurant without name', () => {
    presenter._showFoundRestaurants([{ id: 1 }]);
    expect(document.querySelectorAll('.restaurant__name').item(0).textContent)
      .toEqual('-');
  });

  it('should show the restaurants found by Favorite Restaurants', (done) => {
    document.getElementById('restaurant-search-container')
      .addEventListener('restaurants:searched:updated', () => {

        expect(document.querySelectorAll('.restaurant').length).toEqual(3);
        done();
      });

    FavoriteRestaurantIdb.searchRestaurants.withArgs('resto a').and.returnValues([
      { id: 111, name: 'resto abc' },
      { id: 222, name: 'ada juga resto abcde' },
      { id: 333, namae: 'ini boleh ada resto a' },
    ]);

    searchRestaurants('resto a');
  });

  it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
    document.getElementById('restaurant-search-container').addEventListener('restaurants:searched:updated', () => {
      const restaurantNames = document.querySelectorAll('.restaurant__name');
      expect(restaurantNames.item(0).textContent).toEqual('resto abc');
      expect(restaurantNames.item(1).textContent).toEqual('ada juga resto abcde');
      expect(restaurantNames.item(2).textContent).toEqual('ini juga boleh resto a');

      done();
    });

    FavoriteRestaurantIdb.searchRestaurants.withArgs('resto a').and.returnValues([
      { id: 111, name: 'resto abc' },
      { id: 222, name: 'ada juga resto abcde' },
      { id: 333, name: 'ini juga boleh resto a' },
    ]);

    searchRestaurants('resto a');
  });
});