const assert = require('assert');

Feature('Add Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('Add a review on restaurant', ({ I }) => {
  I.waitForElement(".restaurant__name a", 10);

  I.seeElement('.restaurant__name a');

  const firstResto = locate('.restaurant__name a').first();
  I.click(firstResto);

  I.waitForElement('.add_review', 10);

  I.seeElement('.add_review', '#inputName', '#inputReview');

  I.fillField('#inputName', 'Rusdia Hamid');
  I.fillField('#inputReview', 'Waw Makanan di Restoran ini enak-enak sekali.');
  I.click('#btnSubmit');
})