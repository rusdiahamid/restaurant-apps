class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Favorit</a></li>
          <li><a href="https://github.com/rusdiahamid">About Us</a></li>
        </ul>
      </nav>
        `;
  }
}

customElements.define('nav-bar', NavBar);