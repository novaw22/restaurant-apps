import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import RestaurantFavoriteIdb from '../../src/scripts/data/restaurant-favorite-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: RestaurantFavoriteIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
