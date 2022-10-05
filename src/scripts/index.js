import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './main.js'
import main from './main.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css'

main();
const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});
 
mainElement.addEventListener('click', event => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
})