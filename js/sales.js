// Constructor function for salmon cookie stand
function CookieStand(name, phone, location, hours, minCustomers, maxCustomers, avgSale) {
  this.name = name;
  this.phone = phone;
  this.location = location;
  this.hours = hours;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.averageCookiesPerHour = [];
}

// Method to simulate cookies purchased
CookieStand.prototype.simulateCookiesPurchased = function() {
  let hours = this.hours.split(', ');
  let minCustomers = this.minCustomers;
  let maxCustomers = this.maxCustomers;
  let avgSale = this.avgSale;
  hours.forEach(hour => {
    let customers = getRandomNumberBetween(minCustomers, maxCustomers);
    let cookiesSold = Math.round(customers * avgSale);
    this.averageCookiesPerHour.push(cookiesSold);
  });
};

// Method to render cookies per hour for a location
CookieStand.prototype.render = function() {
  let tableRow = document.createElement('tr');
  let rowData = [this.name, ...this.averageCookiesPerHour, this.calculateDailyTotal()];

  rowData.forEach(data => {
    let cell = document.createElement('td');
    cell.textContent = data;
    tableRow.appendChild(cell);
  });

  document.getElementById('cookieTable').appendChild(tableRow);
};

// Method to calculate daily total cookies for a location
CookieStand.prototype.calculateDailyTotal = function() {
  return this.averageCookiesPerHour.reduce((acc, curr) => acc + curr, 0);
};

// Function to generate random number
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to create header row
function createHeaderRow() {
  let tableHeaderRow = document.createElement('tr');
  let headerData = ['Location', ...Array.from({length: 14}, (_, i) => `${i+6}:00am`), 'Daily Location Total'];

  headerData.forEach(data => {
    let headerCell = document.createElement('th');
    headerCell.textContent = data;
    tableHeaderRow.appendChild(headerCell);
  });

  document.getElementById('cookieTable').appendChild(tableHeaderRow);
}

// Function to create footer row
function createFooterRow(locations) {
  let tableFooterRow = document.createElement('tr');
  let footerData = ['Totals'];

  // Calculate hourly totals across all stores
  for (let i = 1; i <= 14; i++) {
    let total = locations.reduce((acc, location) => acc + location.averageCookiesPerHour[i - 1], 0);
    footerData.push(total);
  }

  // Calculate grand total across all stores
  let grandTotal = locations.reduce((acc, location) => acc + location.calculateDailyTotal(), 0);
  footerData.push(grandTotal);

  footerData.forEach(data => {
    let footerCell = document.createElement('td');
    footerCell.textContent = data;
    tableFooterRow.appendChild(footerCell);
  });

  document.getElementById('cookieTable').appendChild(tableFooterRow);
}

// Create instances for each cookie stand location
let seattle = new CookieStand('Seattle', '123-456-7890', '2901 3rd Ave #300, Seattle, WA 9821', '6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm', 23, 65, 6.3);
let tokyo = new CookieStand('Tokyo', '222-222-2222', '1 Chrome-1-2 Pshiage, Sumida City, Tokyo 131-8634', '6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm', 3, 24, 1.2);
let dubai = new CookieStand('Dubai', '333-333-3333', '1 Sheikh Mohammed bin Rashid Blvd - Dubai', '6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm', 11, 38, 3.7);
let paris = new CookieStand('Paris', '444-444-4444', 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris', '6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm', 20, 38, 2.3);
let lima = new CookieStand('Lima', '555-555-5555', 'Ca. Gral. Borgoño cuadra 8, Miraflores 15074', '6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm', 2, 16, 4.6);

// Generate random sales data for each location
seattle.simulateCookiesPurchased();
tokyo.simulateCookiesPurchased();
dubai.simulateCookiesPurchased();
paris.simulateCookiesPurchased();
lima.simulateCookiesPurchased();

// Create table header
createHeaderRow();

// Display results for each location
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// Create table footer
createFooterRow([seattle, tokyo, dubai, paris, lima]);
