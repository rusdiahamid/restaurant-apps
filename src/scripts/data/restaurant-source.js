import API_ENDPOINT from '../globals/api-endpoints';

class RestaurantSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default RestaurantSource;
