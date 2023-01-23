const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

// Scenario('showing empty liked restaurants', ({ I }) => {
//   I.seeElement('#query');
//   I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');
// })

// Scenario('liking one movie', async ({ I }) => {
//   I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');

//   I.amOnPage('/');

//   I.waitForElement(".restaurant__name a", 10);

//   I.seeElement('.restaurant__name a');

//   const firstResto = locate('.restaurant__name a').first();
//   const firstRestoName = await I.grabTextFrom(firstResto);
//   I.click(firstResto);

//   I.waitForElement("#likeButton", 10);

//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   I.amOnPage('/#/favorite');
//   I.seeElement('.restaurant-item');
//   const likedRestoName = await I.grabTextFrom('.restaurant__name');

//   assert.strictEqual(firstRestoName, likedRestoName);
// })

Scenario('Searching Restaurants', async ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.waitForElement(".restaurant__name a", 10);
  I.seeElement('.restaurant__name a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant__name a').at(i));
    I.waitForElement("#likeButton", 10);

    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.restaurant_name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');

  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restaurant__name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
})

Scenario('Unlike Restaurants', async ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement(".restaurant__name a", 10);

  I.seeElement('.restaurant__name a');

  const firstResto = locate('.restaurant__name a').first();
  I.click(firstResto);

  I.waitForElement("#likeButton", 10);

  I.seeElement('#likeButton');
  I.click('#likeButton');


  I.amOnPage('/#/favorite');

  I.waitForElement(".restaurant__name a", 10);

  I.seeElement('.restaurant__name a');

  const firstLikedResto = locate('.restaurant__name a').first();
  I.click(firstLikedResto);

  I.waitForElement("#likeButton", 10);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSeeElement('.restaurant__name a');
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');

});