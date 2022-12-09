const Home = {
  async render() {
    return `
    <h1 class="main__title">Explore Restaurant</h1>
      <restaurant-list></restaurant-list>
    `;
  },

  async afterRender() {
    // some function
  },
};

export default Home;
