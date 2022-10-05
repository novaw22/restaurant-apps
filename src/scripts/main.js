import restaurants from '../DATA.json'

function main() {
  const showRestaurant = (restaurants) => {
      const restaurantListElement = document.querySelector('#restaurantList');
      restaurantListElement.innerHTML = '';

      restaurants.restaurants.forEach(restaurant => {
          restaurantListElement.innerHTML += `
          <div class="resto-item" tabindex="0">
            <div class="card">
              <img class="resto-img" src=${restaurant.pictureId} alt="${restaurant.name}">
              <div class="rating">
                <span class="fa-thin fa-star star-icon" aria-label="rating"></span>
                <p style= "display: inline">${restaurant.rating}</p>
              </div>
              <div class="card-text">
                <h3>${restaurant.city}</h3>
                <h4>${restaurant.name}</h4>
                <p>${restaurant.description}</p>
              </div>
            </div>
          </div>`
      });
  }
  showRestaurant(restaurants)
}

export default main;