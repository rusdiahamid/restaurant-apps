class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
        <div class="logo">
          <h1>HangerApps</h1>
        </div>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="#">Favorit</a></li>
          <li><a href="https://github.com/rusdiahamid">About Us</a></li>
        </ul>

        <a href="#" class="menu-toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </a>
      </nav>
        `;
  }
}

customElements.define('nav-bar', NavBar);