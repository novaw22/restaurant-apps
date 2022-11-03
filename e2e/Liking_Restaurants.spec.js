const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
  });
   
  Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  });

  Scenario('liking one restaurant', async ({ I }) => {
    I.amOnPage('/');
    
    I.waitForElement('.resto-item', 10);
    I.seeElement('.resto-item');
    const firstRestaurant = locate('.restaurant__title').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');
    const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  });

  Scenario('unliking one restaurant', async ({ I }) => {
    I.amOnPage('/');
    
    I.waitForElement('.resto-item', 10);
    I.seeElement('.resto-item');
    const firstRestaurant = locate('.restaurant__title').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');
    const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    const likedRestaurant = locate('.restaurant__title').first();
    const firstLikedRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(likedRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    const unlikeRestaurantTitle = await I.grabTextFrom('.restaurant__title');
    assert.strictEqual(firstLikedRestaurantTitle, unlikeRestaurantTitle);

    I.amOnPage('/#/favorite');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  });

  Scenario('searching restaurants', async ({ I }) => {
  
    I.amOnPage('/');

    I.waitForElement('.card a', 10);
    I.seeElement('.card a');
  
    const titles = [];
  
    for (let i = 1; i <= 3; i++) {
      I.click(locate('.card a').at(i));
      I.seeElement('#likeButton');
      I.click('#likeButton');
      titles.push(await I.grabTextFrom('.restaurant__title'));
      I.amOnPage('/');
    }
  
    I.amOnPage('/#/favorite');
    I.seeElement('#query');
  
    const searchQuery = titles[1].substring(1, 3);
    const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);
  
    I.fillField('#query', searchQuery);
    I.pressKey('Enter');
  
    const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.resto-item');
    assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);
  
    matchingRestaurants.forEach(async (title, index) => {
      const visibleTitle = await I.grabTextFrom(locate('.restaurant__title').at(index + 1));
      assert.strictEqual(title, visibleTitle);
    });
});