import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import RestaurantFavoriteIdb from '../src/scripts/data/restaurant-favorite-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestaurantFavoriteIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await RestaurantFavoriteIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(RestaurantFavoriteIdb);
});
