import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h3 tabindex="0" class="restaurant__title">${restaurant.name}</h3>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__overview">
        <h4>Deskripsi</h4>
        <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__info">
        <h4>Informasi</h4>
        <p>Alamat: ${restaurant.address}, Kota ${restaurant.city}</p>
        <h4>Menu</h4>
        <div class="menu-resto">
            <div class="makanan">
                <h5>Makanan</h5>
                <ul class="foods">${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')} </ul>
            </div>
            <div class="minuman">
                <h5>Minuman</h5>
                <ul class="drinks">${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')} </ul>
            </div>
        </div>
        <div class="resto-review">
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
            <img class="resto-img lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name || '-'}">
            <div class="rating">
                <span class="fa-thin fa-star star-icon" aria-label="rating"></span>
                <p style= "display: inline">${restaurant.rating}</p>
            </div>
            <div class="card-text">
                <h3>${restaurant.city}</h3>
                <h4 class="restaurant__title">${restaurant.name || '-'}</h4>
                <p>${restaurant.description || '-'}</p>
            </div>
        </a></div>
    </div>
    `;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
