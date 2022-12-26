import API_ENDPOINT from '../globals/api-endpoints';

class RestaurantSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(review) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      };
      const response = await fetch(API_ENDPOINT.REVIEW, options);
      const responseJson = await response.json();
      // eslint-disable-next-line no-alert
      window.alert(`${responseJson.message} posted your review!`);
    } catch (error) {
      console.log(error);
    }
  }
}
export default RestaurantSource;
