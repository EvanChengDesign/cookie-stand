let hours = []

//object literals for shop locations: 

let seattle = {
    name: "Seattle",
    phone: "123-456-7890",
    location: "2901 3rd Ave #300, Seattle, WA 9821",
    hours: "6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm",
    minCustomers: 23,
    maxCustomers: 65,
    avgSale: 6.3,
    averageCookiesPerHour: []
}

let tokyo = {
    name: "Tokyo",
    phone: "222-222-2222",
    location: "1 Chrome-1-2 Pshiage, Sumida City, Tokyo 131-8634",
    hours: "6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm",
    minCustomers: 3,
    maxCustomers: 24,
    avgSale: 1.2,
    averageCookiesPerHour: []
}

let dubai = {

    name: "Dubai", 
    phone: "333-333-3333",
    location: "1 Sheikh Mohammed bin Rashid Blvd - Dubai",
    hours: "6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm",
    minCustomers: 11,
    maxCustomers: 38,
    avgSale: 3.7,
    averageCookiesPerHour: []
   
}

let paris = {

    name: "Paris", 
    phone: "444-444-4444",
    location: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",
    hours: "6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm",
    minCustomers: 20,
    maxCustomers: 38,
    avgSale: 2.3,
    averageCookiesPerHour: []
   
}

let lima = {

    name: "Lima", 
    phone: "555-555-5555",
    location: "Ca. Gral. Borgoño cuadra 8, Miraflores 15074",
    hours: "6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm",
    minCustomers: 2,
    maxCustomers: 16,
    avgSale: 4.6,
    averageCookiesPerHour: []
}

// Function to simulate cookies purchased for each location
function simulateCookiesPurchased(location) {
    let hoursArray = location.hours.split(", ");
    for (let i = 0; i < hoursArray.length; i++) {
        let randomCustomers = generateRandomCustomers(location.minCustomers, location.maxCustomers);
        let cookiesSold = Math.round(randomCustomers * location.avgSale);
        location.averageCookiesPerHour.push({ hour: hoursArray[i], cookies: cookiesSold });
    }
}

// Function to display cookies purchased per hour for each location
function displayCookiesPerHour(location) {
    let cookiesList = document.createElement('ul');
    let totalSales = 0;

    location.averageCookiesPerHour.forEach(hourData => {
        createListItem(cookiesList, `${hourData.hour}: ${hourData.cookies} cookies`);
        totalSales += hourData.cookies;
    });

    createListItem(cookiesList, `Total Sales: ${totalSales} cookies`);

    let container = document.createElement('div');
    container.appendChild(document.createTextNode(`Location: ${location.name}`));
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createTextNode("Average Cookies Per Hour:"));
    container.appendChild(cookiesList);

    document.body.appendChild(container);
}

// Function to display city information
function displayCityInfo(location) {
    let cityInfo = document.createElement('ul');
    createListItem(cityInfo, `Name: ${location.name}`);
    createListItem(cityInfo, `Phone: ${location.phone}`);
    createListItem(cityInfo, `Location: ${location.location}`);
    createListItem(cityInfo, `Hours: ${location.hours}`);
    createListItem(cityInfo, `Min Customers: ${location.minCustomers}`);
    createListItem(cityInfo, `Max Customers: ${location.maxCustomers}`);
    createListItem(cityInfo, `Avg Sale: ${location.avgSale}`);

    let container = document.createElement('div');
    container.appendChild(cityInfo);

    document.body.appendChild(container);
}

// Store customer info for each location
storeCustomerInfo(seattle);
storeCustomerInfo(tokyo);
storeCustomerInfo(dubai);
storeCustomerInfo(paris);
storeCustomerInfo(lima);

// Simulate cookies purchased for each location
simulateCookiesPurchased(seattle);
simulateCookiesPurchased(tokyo);
simulateCookiesPurchased(dubai);
simulateCookiesPurchased(paris);
simulateCookiesPurchased(lima);

// Display cookies purchased per hour for each location
displayCookiesPerHour(seattle);
displayCookiesPerHour(tokyo);
displayCookiesPerHour(dubai);
displayCookiesPerHour(paris);
displayCookiesPerHour(lima);

// Display city information for each location
displayCityInfo(seattle);
displayCityInfo(tokyo);
displayCityInfo(dubai);
displayCityInfo(paris);
displayCityInfo(lima);



// display results for each location
// displayCookiesPerHour(seattle)
// displayCookiesPerHour(tokyo)
// displayCookiesPerHour(dubai)
// displayCookiesPerHour(paris)
// displayCookiesPerHour(lima)



