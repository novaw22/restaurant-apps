import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h3 tabindex="0">${restaurant.name}</h3>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__overview">
        <h4 tabindex="0">Deskripsi</h4>
        <p tabindex="0">${restaurant.description}</p>
    </div>
    <div class="restaurant__info">
        <h4 tabindex="0">Informasi</h4>
        <p tabindex="0">Alamat: ${restaurant.address}, Kota ${restaurant.city}</p>
        <h4 tabindex="0">Menu</h4>
        <div class="menu-resto">
            <div class="makanan" tabindex="0">
                <h5 tabindex="0">Makanan</h5>
                <ul class="foods">${restaurant.menus.foods.map((food) => `<li tabindex="0">${food.name}</li>`).join('')} </ul>
            </div>
            <div class="minuman">
                <h5 tabindex="0">Minuman</h5>
                <ul class="drinks">${restaurant.menus.drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join('')} </ul>
            </div>
        </div>
        <div class="resto-review" tabindex="0">
            <h4>Ulasan</h4>
            <ul>${restaurant.customerReviews.slice(0, 7).map((review) => `
                <h6>${review.name}</h6>
                <p>${review.review}</p>
                `).join('')}
            </ul>
        </div>
    </div>
    `;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="resto-item" tabindex="0">
        <div class="card"><a href="/#/detail/${restaurant.id}">
            <img class="resto-img" src=${CONFIG.BASE_IMAGE_URL + restaurant.pictureId} alt="${restaurant.name}">
            <div class="rating">
                <span class="fa-thin fa-star star-icon" aria-label="rating"></span>
                <p style= "display: inline">${restaurant.rating}</p>
            </div>
            <div class="card-text">
                <h3>${restaurant.city}</h3>
                <h4>${restaurant.name}</h4>
                <p>${restaurant.description}</p>
            </div>
        </a></div>
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
