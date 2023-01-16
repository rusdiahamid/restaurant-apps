import Swal from 'sweetalert2';
import { createLikeRestaurantButtonTemplate, createUnikeRestaurantButtonTemplate } from '../view/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderUnlike();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getResto(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putResto(this._restaurant);
      this._renderButton();
      Swal.fire({
        toast: true,
        position: 'top',
        icon: 'success',
        title: 'Restaurant saved to Favorit!',
        showConfirmButton: false,
        timer: 1500,
      });
    });
  },

  _renderUnlike() {
    this._likeButtonContainer.innerHTML = createUnikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteResto(this._restaurant.id);
      this._renderButton();
      Swal.fire({
        toast: true,
        position: 'top',
        icon: 'success',
        title: 'Restaurant drop from Favorit!',
        showConfirmButton: false,
        timer: 1500,
      });
    });
  },
};

export default LikeButtonPresenter;
