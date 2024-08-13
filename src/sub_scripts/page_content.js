//function to load content to page
export function pageLoad() {
//bringing in div to add things too
let content_area = document.getElementById('content');

//bringing in h1
const heading_text = document.createElement('h1');
heading_text.classList.add('heading-text');
heading_text.textContent = "Super Awesome Resturant!";
content_area.appendChild(heading_text);

//bringing in intro text
const intro_text = document.createElement('p');
intro_text.classList.add('intro-text');
intro_text.textContent = "Enjoy our mouth watering meals from our awesome establishment near you!";
content_area.appendChild(intro_text);
}