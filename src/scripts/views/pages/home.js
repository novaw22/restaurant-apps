import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero" role="img" aria-label="hero image">
          <div class="hero__inner">
          <h2 class="hero__title">Pilihlah Menu Makanmu Hari Ini</h2>
          <p class="hero__tagline">Nikmatilah menu makanmu di hari ini dengan makanan yang ada di restaurant kami</p>
          </div>
      </div>
      <h2 id="maincontent" tabindex="0">Explore Restaurant</h2>
      <div id="restaurantList" class="resto-list"></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.home();
    const restaurantContainer = document.querySelector('#restaurantList');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
