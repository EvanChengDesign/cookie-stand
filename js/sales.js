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

  rowData.forEach((data, index) => {
    let cell = document.createElement('td');
    cell.textContent = data;
    if (index === 0) { // Check if it's the location name cell
      cell.classList.add('location-name'); // Add the class to target the location name
    }
    tableRow.appendChild(cell);
  });

  document.getElementById('cookieSalesTable').appendChild(tableRow);
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
  let headerData = ['Locations'];

  // Loop to generate header data for each hour
  for (let i = 6; i <= 19; i++) {
    let hour = i % 12; // Convert to 12-hour format
    let period = i < 12 ? 'am' : 'pm'; // Determine period (am/pm)
    if (hour === 0) hour = 12; // Convert 0 to 12 for 12am
    headerData.push(`${hour}${period}`);
  }

  headerData.push('Location Totals');

  // Create table header cells
  headerData.forEach(data => {
    let headerCell = document.createElement('th');
    headerCell.textContent = data;
    tableHeaderRow.appendChild(headerCell);
  });

  // Append the header row to the table
  document.getElementById('cookieSalesTable').appendChild(tableHeaderRow);
}

// Function to create footer row
function createFooterRow(locations) {
  let tableFooterRow = document.createElement('tfoot');
  let footerData = ['Hourly Totals for All Locations'];

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

  document.getElementById('cookieSalesTable').appendChild(tableFooterRow);
}

// Function to create location totals column
function createLocationTotalsColumn(locations) {
  let tableRows = document.querySelectorAll('#cookieSalesTable tbody tr');

  tableRows.forEach((row, index) => {
    let locationTotal = locations[index].calculateDailyTotal();
    let totalCell = document.createElement('td');
    totalCell.textContent = locationTotal;
    row.appendChild(totalCell);
  });
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

// Create location totals column
createLocationTotalsColumn([seattle, tokyo, dubai, paris, lima]);
