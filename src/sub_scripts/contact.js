//function to create contact section 
export function Contact_sec() {
    //bringing in div to add things too
    let content_area = document.getElementById('content');

    //creating and adding div to content area 
    const contact_div = document.createElement('div');
    contact_div.classList.add('contact_div');
    content_area.appendChild(contact_div);

    //creating and adding heading to contact div
    const contact_div_heading = document.createElement('h2');
    contact_div_heading.textContent = "Contact";
    contact_div.appendChild(contact_div_heading);

    //creating contact info div and adding it to contact div
    const contact_info_div = document.createElement('div');
    contact_info_div.classList.add("contact_info_div");
    contact_div.appendChild(contact_info_div);

    //adding contact to contact info div
    // Array of contact information
    const contact_info = [
        { label: "Name", value: "Super Awesome Restaurant" },
        { label: "Email", value: "contact@SuperAwesomeRestaurant.com" },
        { label: "Phone Number", value: "(773) 782-7665" }
    ];

    // Creating unordered list for contact info
    const ul_contact_info = document.createElement('ul');

    //creating lists of the contacts
    contact_info.forEach(info => {
        const li = document.createElement('li');
        li.textContent = `${info.label}: ${info.value}`;
        ul_contact_info.appendChild(li);
    });

    //adding list to div
    contact_info_div.appendChild(ul_contact_info);
}