class HeroSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="hero__inner">
         <h1 class="hero__title">Your stomach feeling hungry?</h1>
         <p class="hero__tagline">let's explore the restaurant with us</p>
  </div>
        `
    }
}
customElements.define('hero-section', HeroSection)