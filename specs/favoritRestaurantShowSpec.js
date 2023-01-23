import FavoriteRestaurantSearchView from '../src/scripts/view/pages/liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantsShowPresenter from '../src/scripts/view/pages/liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('showing all favorite restaurant', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  })

  describe('when no restaurants have been liked', () => {
    it('should ask for the favorite restuarants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantsShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('Should show the information that no restaurants have been liked', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantsShowPresenter({
        view,
        favoriteRestaurants,
      });
      done();
    })
  });

  describe('When favorite restaurants exist', () => {

    it('should show the restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(2);
        done();
      });
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb, false);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11,
          name: 'A',
          rating: 3,
          description: 'Sebuah resto A',
        },
        {
          id: 22,
          name: 'B',
          rating: 4,
          description: 'Sebuah resto B',
        },
      ]);
      new FavoriteRestaurantsShowPresenter({
        view,
        favoriteRestaurants,
      });
      done();
    });
  });
});