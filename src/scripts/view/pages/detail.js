import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="restaurant"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailResto(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });

    const inputName = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');
    const btnSubmit = document.querySelector('#btnSubmit');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const dataInput = {
        id: url.id,
        name: inputName.value,
        review: inputReview.value,
      };
      RestaurantSource.addReview(dataInput);
    });
  },
};

export default Detail;
