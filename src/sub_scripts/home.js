//function to create home section
export function Home_sec() {
    //bringing in div to add things too
    let content_area = document.getElementById('content');

    //creating and adding div to content area 
    const about_div = document.createElement('div');
    about_div.classList.add('about_div');
    content_area.appendChild(about_div);

    //creating and adding about us text to div area
    const about_div_text = document.createElement('p');
    about_div_text.classList.add("about_div_text");
    about_div_text.textContent = "Welcome to Super Awesome Restaurant, where the food is so good, even your taste buds do a happy dance! We’re not just awesome—we’re super awesome, and yes, that’s scientifically proven (by us). Come for the laughs, stay for the eats, and leave wondering if you just found your new favorite spot. Spoiler: You did!";
    about_div.appendChild(about_div_text);

    //creating and adding hours div to content area
    const hours_div = document.createElement('div');
    hours_div.classList.add('hours_div');
    content_area.appendChild(hours_div);

    //creating and adding text and hours to the hours div
    //creating text and adding to div
    const hours_div_text = document.createElement('h2');
    hours_div_text.textContent = "Our Awesomazing Hours Below";
    hours_div.appendChild(hours_div_text);

    //creating hours and adding them to div
    //array to hold days of the week
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    //creating unorderded list tag
    const ul = document.createElement('ul');

    //adding the hours to each day of the week
    daysOfWeek.forEach(day => {
        const li = document.createElement('li');
        li.textContent = `${day}: 8 AM - 8 PM`;
        ul.appendChild(li);
    });

    //adding hours to hours div
    hours_div.appendChild(ul);

    //creating location div area and adding it to content div area
    const location_div = document.createElement("div");
    location_div.classList.add("location_div");
    content_area.appendChild(location_div);

    //creating and adding heading and text to llcation div
    //creating heading and adding it
    const location_div_heading = document.createElement("h2");
    location_div_heading.textContent = "Our AWESOME location below";
    location_div.appendChild(location_div_heading);

    //creating text and adding it to location div
    const location_div_text = document.createElement("p");
    location_div_text.textContent = "789 Epic Eats Avenue, Awesometown, Tastebud County, Flavorland";
    location_div.appendChild(location_div_text);    
}


