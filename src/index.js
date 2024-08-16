//importing css
import './PageStyles/styles.css';

//importing page content funciton
import { pageLoad } from './sub_scripts/page_content.js';

//importing home section
import { Home_sec } from './sub_scripts/home.js';

//importing menu section
import { Menu_sec } from './sub_scripts/menu.js';

// Call the pageLoad function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
  });