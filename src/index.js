//importing css
import './styles.css';

//importing page content funciton
import { pageLoad } from './sub_scripts/page_content.js';

// Call the pageLoad function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
  });