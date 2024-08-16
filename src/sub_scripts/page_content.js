//function to load content to page
export function pageLoad() {
//bringing in div to add things too
let content_area = document.getElementById('content');

//bringing in h1
const heading_text = document.createElement('h1');
heading_text.classList.add('heading-text');
heading_text.textContent = "Super Awesome Resturant!";
content_area.appendChild(heading_text);
}