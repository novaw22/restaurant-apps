import RestaurantFavoriteIdb from '../../data/restaurant-favorite-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <h2 tabindex="0" style="margin-top: 30px;">Restaurant Favoritmu</h2>
        <div id="restaurantList" class="resto-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantFavoriteIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurantList');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
