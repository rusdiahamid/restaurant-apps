export class DataSource {
    static getRestaurant() {
        return fetch(data)
            .then((response) => response.json)
    }
}