import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<restaurant-item>
<figure class="restaurant__image">
<img class="restaurant__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restoran ${restaurant.name}">
<span class="restaurant__city">${restaurant.city}</span>   
</figure>
<div class="restaurant__info">
<span class="restaurant__rating" aria-label="Restaurant Rating ${restaurant.rating}">⭐ <strong>${restaurant.rating}</strong> / 5.0</span>
<h2 class="restaurant__name"><a href="#">${restaurant.name}</a></h2>
<p class="restaurant__description">${restaurant.description}</p>
</div>
</restaurant-item>
`;

const createRestaurantDetailTemplate = (restaurant) => `${restaurant.name}`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
