// from data.js
var tableData = data;

// Define the table
var tbody = d3.select("tbody");

// Define the date filter button
var dateButton = d3.select("#date-filter-btn");

// Define the refresh button
var refreshButton = d3.select("#refresh-btn");

// Looping through the sighting data and appending data per cell using
// the 'td' html tag
data.forEach(sighting => {
    // console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        // console.log(key, value);
        var tableData = row.append("td");
        tableData.text(value);
    })
});


// Date button function
dateButton.on("click", function () {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    // Displayr filtered data on console
    console.log(filteredData);

    // remove any data from the table
    tbody.html("");

    // Loop through filered data and append to table
    filteredData.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([, value]) => {
            var tableData = row.append("td");
            tableData.text(value);
        })
    });
});


// Refresh button function
refreshButton.on("click", function () {

    // remove any data from the table
    tbody.html("");

    // Displays table 
    data.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var tableData = row.append("td");
            tableData.text(value);
        })
    });
});

