import './restaurant-item.js'

class RestaurantList extends HTMLElement {
    set restaurants(restaurants) {
        this._restaurants = restaurants;
        this.render();
    }

    render() {
        console.log(this._restaurants)
        this.innerHTML = '';
        this._restaurants.forEach(restaurant => {
            const restaurantItem = document.createElement('restaurant-item');
            restaurantItem.restaurant = restaurant;
            this.appendChild(restaurantItem);
        });
    }

}

customElements.define('restaurant-list', RestaurantList)