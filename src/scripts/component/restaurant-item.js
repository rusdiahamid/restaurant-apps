class RestauranItem extends HTMLElement {
    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    render() {
        this.innerHTML = `
        <figure class="restaurant__image">
            <img class="restaurant__thumbnail" src="${this._restaurant.pictureId}" alt="Gambar Restoran ${this._restaurant.name}">
            <span class="restaurant__city">${this._restaurant.city}</span>   
        </figure>
        <div class="restaurant__info">
            <span class="restaurant__rating" aria-label="Restaurant Rating ${this._restaurant.rating}">⭐ <strong>${this._restaurant.rating}</strong> / 5.0</span>
            <h2 class="restaurant__name"><a href="#">${this._restaurant.name}</a></h2>
            <p class="restaurant__description">${this._restaurant.description}</p>
        </div>
        `
    }
}

customElements.define('restaurant-item', RestauranItem);