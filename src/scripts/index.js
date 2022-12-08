import 'regenerator-runtime'; /* for async await transpile */
import './component/nav-bar';
import './component/hero-section';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './view/app';


const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('nav-bar'),
  content: document.querySelector('#mainContent'),
});
