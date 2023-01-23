import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const feather = require('feather-icons');

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
<figure class="restaurant__image">
<img class="restaurant__thumbnail lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restoran ${restaurant.name || '-'}" loading="lazy">
<span class="restaurant__city">${restaurant.city || '-'}</span>   
</figure>
<div class="restaurant__info">
<span class="restaurant__rating" aria-label="Restaurant Rating ${restaurant.rating || '-'}">⭐ <strong>${restaurant.rating || '-'}</strong> / 5.0</span>
<h2 class="restaurant__name"><a href="#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h2>
<p class="restaurant__description">${restaurant.description || '-'}</p><a class="see__detail" href="#/detail/${restaurant.id}">See details</a>
</div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="identity">
  <div class="image_container">
  <img class="restaurant_image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restoran ${restaurant.name}">
  </div>
  <div class="restaurant_info">
  <h1 class="restaurant_name">${restaurant.name}</h1>
  <p>${feather.icons.book.toSvg({ class: 'info__icons' })} Category : ${restaurant.categories.map((category) => `<span class="restaurant__category"> ${category.name}</span>`).join(', ')} </p>
  <p>${feather.icons['map-pin'].toSvg({ class: 'info__icons' })} Address : ${restaurant.address} <span>, ${restaurant.city}</span></p>
  <p>${feather.icons.star.toSvg({ class: 'info__icons' })} Rating : ${restaurant.rating}</p>
  <p class="restaurant_description">${restaurant.description}</p>
  </div>
</div>

  <div class="menu">
    <h2 class="menu_title">Menu</h2>
    <div class="menu__container">
      <div class="foods">
        <h3>${feather.icons.database.toSvg({ class: 'info__icons' })} Foods</h3>
        <div class="menu_item">${restaurant.menus.foods.map((food) => `${food.name}`).join(' • ')}
        </div>
      </div>

      <div class="drinks">
        <h3>${feather.icons.coffee.toSvg({ class: 'info__icons' })} Drinks</h3>
        <div class="menu_item">
        ${restaurant.menus.drinks.map((drink) => `${drink.name}`).join(' • ')}
        </div>
    </div>
    </div>
  </div>

  <div class="reviews">
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

  <div class="add_review">
  <h2>Add Review</h2>
    <div class="form__group">
    <label for="inputName">Name</label>
    <input type="text" id="inputName" />
    </div>
    <div class="form__group">
    <label for="inputReview">Review</label>
    <textarea type="text" id="inputReview"></textarea>
    </div>
    <button id="btnSubmit" class="btn__submit">Submit</button>
  </div>
  </div>
`;
const spinner = () => `
   <div id="animated-loader" class="" style="">
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="lightgrey" d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
        <circle r="5" fill="red">
          <animateMotion dur="10s" repeatCount="indefinite" path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
        </circle>
      </svg>
      <div class="loading" id="loading"></div>
    </div>
`;
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     ${feather.icons.bookmark.toSvg({ strok: '#f0ebce' })}
  </button>
`;

const createUnikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  ${feather.icons.bookmark.toSvg({ fill: '#f0ebce', stroke: '#f0ebce' })}
  </button>
`;

const emptyFavoritTemplate = () => `
<div class="empty__favorit">
  <img class="empty__image" src="../images/empty.svg" alt="empty" />
  <p>No Data</p>
</div>
`;

const offlineTemplate = () => `
<div class="offline__container">
  <img class="offline__image" src="../images/server-down.svg" alt="server down" />
  <p>No Internet Connection.</p>
</div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnikeRestaurantButtonTemplate,
  emptyFavoritTemplate,
  spinner,
  offlineTemplate,
};
