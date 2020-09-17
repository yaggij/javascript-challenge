// Assign the data from `data.js` to a descriptive variable
var ufos = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  
  // Filtered our data for the users input of date
  var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData);

  
  // Get a reference to the table body
var tbody = d3.select("tbody");

// Use Arrow functions to put data in the table
filteredData.forEach((Ufo) => {
  var row = tbody.append("tr");
  Object.entries(Ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



}
