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
        <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4.jpg" />
        <img src="./images/heros/hero-image_4.jpg" alt="Hunger App Hero Image" />
        </picture>

        
        `;
  }
}

customElements.define('hero-section', HeroSection);
