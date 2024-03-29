class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav id="navigationDrawer">
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="https://github.com/rusdiahamid" target="_blank" rel="noreferrer">About Us</a></li>
        </ul>
      </nav>
        `;
  }
}

customElements.define('nav-bar', NavBar);
