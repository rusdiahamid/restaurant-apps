import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<restaurant-item>
<figure class="restaurant__image">
<img class="restaurant__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restoran ${restaurant.name}">
<span class="restaurant__city">${restaurant.city}</span>   
</figure>
<div class="restaurant__info">
<span class="restaurant__rating" aria-label="Restaurant Rating ${restaurant.rating}">⭐ <strong>${restaurant.rating}</strong> / 5.0</span>
<h2 class="restaurant__name"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h2>
<p class="restaurant__description">${restaurant.description}</p>
</div>
</restaurant-item>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="identity">
  <div class="image_container">
  <img class="restaurant_image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restoran ${restaurant.name}">
  </div>
  <div class="restaurant_info">
  <h1 class="restaurant_name">${restaurant.name} <span>- ${restaurant.city}</span></h1>
  <p>Category : ${restaurant.categories.map((category) => `<span class="restaurant__category">${category.name}</span>`).join(', ')} </p>
  <p>Address : ${restaurant.address}</p>
  <p>Rating : ${restaurant.rating}</p>
  <p class="restaurant_description">${restaurant.description}</p>
  </div>
</div>

  <div class="menu">
    <h2 class="menu_title">Menu</h2>
    <div class="foods">
    <h3>Foods</h3>
    <div class="menu_item">${restaurant.menus.foods.map((food) => `${food.name}`).join(', ')}
    </div>
    </div>

    <div class="drinks">
    <h3>Drinks</h3>
    <div class="menu_item">
     ${restaurant.menus.drinks.map((drink) => `${drink.name}`).join(', ')}
     </div>
    </div>
  </div>
  <div class="customer_reviews">
  <h2 class="customer_reviews_title">Customer Reviews</h2>
  <div class="reviews_container">
    ${restaurant.customerReviews.map((review) => `
    <div class="review">
      <h4>${review.name}</h4>
      <p>${review.review}</p>
      <small>${review.date}</small>
    </div>`).join('')}
   </div>
   </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
