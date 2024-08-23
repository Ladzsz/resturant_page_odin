//importing css
import './PageStyles/styles.css';

//importing page content funciton
import { pageLoad } from './sub_scripts/page_content.js';

//importing home section
import { Home_sec } from './sub_scripts/home.js';

//importing menu section
import { Menu_sec } from './sub_scripts/menu.js';

//importing contact section 
import { Contact_sec } from './sub_scripts/contact.js';

//event listener for home btn
document.getElementById('home-btn').addEventListener('click', function() {
  //run home sec
  Home_sec();
});

//event lisenter for menu btn
document.getElementById('menu-btn').addEventListener('click', function() {
  //run menu sec
  Menu_sec();
});

//event listener for about btn
document.getElementById('about-btn').addEventListener('click', function() {
  //run contact sec
  Contact_sec();
});

// Call the pageLoad function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
  });








