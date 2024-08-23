//linlking css
import "../PageStyles/menuStyles.css";

//function to create menu section
export function Menu_sec() {
    //bringing in div to add things too
    let content_area = document.getElementById('content');

    // Clear the content area before adding new content
    content_area.innerHTML = '';

    //creating and adding menu div
    const menu_div = document.createElement("div");
    menu_div.classList.add("menu_div");
    content_area.appendChild(menu_div);

    //creating and adding text to menu div
    const menu_div_heading = document.createElement("h2");
    menu_div_heading.textContent = "Menu";
    menu_div.appendChild(menu_div_heading);

    //creating and adding beverages div to menu div
    const beverages_div = document.createElement("div");
    beverages_div.classList.add("beverages_div");
    menu_div.appendChild(beverages_div);

    //creating and adding content to bevrages div
    //creating and adding heading
    const beverages_div_heading = document.createElement("h2");
    beverages_div_heading.textContent = "Awesome Drinks";
    beverages_div.appendChild(beverages_div_heading);

    //creating and adding beverages to beverages div
    // Array of beverage items
    const beverages = [
        { name: "Soft Drinks", price: "$4" },
        { name: "Water", price: "Free" },
        { name: "Smoothie (Strawberry)", price: "$6" },
        { name: "Smoothie (Mango)", price: "$6" },
        { name: "Smoothie (Blueberry)", price: "$6" },
    ];

    // Creating unordered list for beverages
    const ul_beverages = document.createElement('ul');

    //creating lists of drinks
    beverages.forEach(drink => {
        const li = document.createElement('li');
        li.textContent = `${drink.name}: ${drink.price}`;
        ul_beverages.appendChild(li);
    });

    //adding beverages list to the div
    beverages_div.appendChild(ul_beverages);

    //creating and adding sides div to menu div
    const sides_div = document.createElement("div");
    sides_div.classList.add("sides_div");
    menu_div.appendChild(sides_div);

    //creating and adding side div text
    const sides_div_heading = document.createElement("h2");
    sides_div_heading.textContent = "Delicious Sides";
    sides_div.appendChild(sides_div_heading);

    // Array of side items
    const sides = [
        { name: "Awesometastic Fries", price: "$4" },
        { name: "10 Mozzarella Sticks", price: "$5" }
    ];

    // Creating unordered list for sides
    const ul_sides = document.createElement('ul');

    //creating lists of sides
    sides.forEach(side => {
        const li = document.createElement('li');
        li.textContent = `${side.name}: ${side.price}`;
        ul_sides.appendChild(li);
    });

    //adding sides lists to div
    sides_div.appendChild(ul_sides);

    //creating and adding main course div to menu div
    const Main_course_div = document.createElement("div");
    Main_course_div.classList.add("Main_course_div");
    menu_div.appendChild(Main_course_div);

    //creating and adding heading
    const Maincourse_heading = document.createElement("h2");
    Maincourse_heading.textContent = "Main courses";
    Main_course_div.appendChild(Maincourse_heading);

    // Array of main course items
    const main_courses = [
        { name: "Saucsome Pizza", price: "$10" },
        { name: "Beef Patty Casserole", price: "$12" },
        { name: "French Toast Schticks", price: "$10" }
    ];

    // Creating unordered list for main courses
    const ul_main_courses = document.createElement('ul');

    //creating lists of main courses
    main_courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.name}: ${course.price}`;
        ul_main_courses.appendChild(li);
    });    

    //adding main courses lists to div
    Main_course_div.appendChild(ul_main_courses);
}

