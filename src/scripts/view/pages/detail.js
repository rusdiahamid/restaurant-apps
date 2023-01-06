import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate, spinner } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    ${spinner()}
    <div id="restaurant"></div>
    <div id="likeButtonContainer"></div>
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

    showSpinner();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailResto(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    hideSpinner();
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });

    const inputName = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');
    const btnSubmit = document.querySelector('#btnSubmit');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (inputName.value === '' || inputReview.value === '') {
        Swal.fire({
          toast: true,
          position: 'top',
          icon: 'error',
          title: 'name and review cannot be empty!',
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        const dataInput = {
          id: url.id,
          name: inputName.value,
          review: inputReview.value,
        };
        RestaurantSource.addReview(dataInput);
        inputName.value = '';
        inputReview.value = '';
        Swal.fire({
          toast: true,
          position: 'top',
          icon: 'success',
          title: 'Your review has been successfully added.',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  },
};

export default Detail;
