// Define shop locations as objects
const locations = [
  {
    name: 'Seattle',
    phone: '123-456-7890',
    location: '2901 3rd Ave #300, Seattle, WA 9821',
    hours: '6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm',
    minCustomers: 23,
    maxCustomers: 65,
    avgSale: 6.3,
    averageCookiesPerHour: []
  },


{
    name: 'Tokyo',
    phone: '222-222-2222',
    location: '1 Chrome-1-2 Pshiage, Sumida City, Tokyo 131-8634',
    hours: '6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm',
    minCustomers: 3,
    maxCustomers: 24,
    avgSale: 1.2,
    averageCookiesPerHour: []
  },

{
    name: 'Dubai',
    phone: '333-333-3333',
    location: '1 Sheikh Mohammed bin Rashid Blvd - Dubai',
    hours: '6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm',
    minCustomers: 11,
    maxCustomers: 38,
    avgSale: 3.7,
    averageCookiesPerHour: []
  },

{
    name: 'Paris',
    phone: '444-444-4444',
    location: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris',
    hours: '6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm',
    minCustomers: 20,
    maxCustomers: 38,
    avgSale: 2.3,
    averageCookiesPerHour: []
  },

{
    name: 'Lima',
    phone: '555-555-5555',
    location: 'Ca. Gral. Borgoño cuadra 8, Miraflores 15074',
    hours: '6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm',
    minCustomers: 2,
    maxCustomers: 16,
    avgSale: 4.6,
    averageCookiesPerHour: []
  },

];

// Function to initialize location properties
function initializeLocation(location) {
  // Combine the first and last hours to display the opening hours
  let firstHour = location.hours.split(', ')[0];
  let lastHour = location.hours.split(', ')[location.hours.split(', ').length - 1];
  location.displayHours = `${firstHour}-${lastHour}`;
  location.displayContactInfo = `Contact Info: ${location.phone}`;
  location.displayLocation = `Location: ${location.location}`;
}

// Function to simulate cookies purchased for a location
function simulateCookiesPurchased(location) {
  let hours = location.hours.split(', ');
  let minCustomers = location.minCustomers;
  let maxCustomers = location.maxCustomers;
  let avgSale = location.avgSale;
  hours.forEach(hour => {
    let customers = getRandomNumberBetween(minCustomers, maxCustomers);
    let cookiesSold = Math.round(customers * avgSale);
    location.averageCookiesPerHour.push(cookiesSold);
  });
}

// Function to display city info
function displayCityInfo(location) {
  let containerHome = document.getElementById('displayCityInfo');
  let title = document.createElement('h2');
  title.textContent = location.name;
  containerHome.appendChild( title );
  let list = document.createElement('ul');
  let hoursItem = document.createElement('li');
  let contactInfoItem = document.createElement('li');
  let locationItem = document.createElement('li');

  hoursItem.textContent = `Hours Open: ${location.displayHours}`;
  contactInfoItem.textContent = location.displayContactInfo;
  locationItem.textContent = location.displayLocation;
  list.appendChild(hoursItem);
  list.appendChild(contactInfoItem);
  list.appendChild(locationItem);
  containerHome.appendChild(list);
}

// Function to display cookies per hour data to HTML
function displayCookiesPerHour(location) {
  let containerCookies = document.createElement('section');
  let title = document.createElement('h2');
  title.textContent = location.name;
  containerCookies.appendChild(title);
  let list = document.createElement('ul');
  let totalCookies = 0;

  location.averageCookiesPerHour.forEach((cookies, index) => {
    let listItem = document.createElement('li');
    listItem.textContent = `${location.hours.split(', ')[index]}: ${cookies} cookies`;
    list.appendChild(listItem);
    totalCookies += cookies;
  });

  let totalListItem = document.createElement('li');
  totalListItem.textContent = `Total Cookies Sold: ${totalCookies}`;
  list.appendChild(totalListItem);

  containerCookies.appendChild(list);

  document.getElementById('salesData').appendChild(containerCookies);
}

// Call functions to initialize location properties and simulate cookies purchased for each location
locations.forEach(location => {
  initializeLocation(location);
  simulateCookiesPurchased(location);
});

// Call functions to display city info and cookies per hour data for each location
locations.forEach(location => {
  displayCityInfo(location);
  displayCookiesPerHour(location);
});

// Function to generate random number
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}