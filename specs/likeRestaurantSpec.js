import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Liking a Restaurant', () => {
  it('should show the like button when the movie has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });


    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();

  });
});