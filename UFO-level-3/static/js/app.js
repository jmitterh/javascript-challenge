// from data.js
var tableData = data;

// Define the table
var tbody = d3.select("tbody");

// Define the refresh button
var refreshButton = d3.select("#refresh-btn");

// When browser loads populate Date dropdown
window.onload = populateDate()

// When browser loads populate City dropdown
window.onload = populateCity()

// When browser loads populate State dropdown
window.onload = populateState()

// When browser loads populate Country dropdown
window.onload = populateCountry()

// When browser loads populate Shape dropdown
window.onload = populateShape()

// Looping through the sighting data and appending data per cell using
// the 'td' html tag
data.forEach(sighting => {
    //console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        //console.log(key, value);
        var tableData = row.append("td");
        tableData.text(value);

    })
});

// 1.1
// Drop down list for Date
function populateDate() {

    // selecting tag
    var select = document.getElementById("date-select");

    // empty object to store list
    var unique = {};

    // for loop to find unique values
    tableData.forEach(data => {
        unique[data.datetime] = unique[data.datetime] || {};
    })

    // Creating dropdown list
    Object.entries(unique).forEach(([val]) => {
        select.innerHTML = select.innerHTML +
            '<option value="' + val + '">' + val + '</option>';
    })
};
// 1.2
// Filter function for Date to display table
function showDate(x) {

    // Filtering data with specified variable
    var filteredData = tableData.filter(data => data.datetime === x.options[x.selectedIndex].text);

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
};


// 2.1
// Drop down list for City
function populateCity() {

    // selecting tag
    var select = document.getElementById("city-select");

    // empty object to store list
    var unique = {};

    // for loop to find unique values
    tableData.forEach(data => {
        unique[data.city] = unique[data.city] || {};
    })

    // Creating dropdown list
    Object.entries(unique).forEach(([val]) => {
        select.innerHTML = select.innerHTML +
            '<option value="' + val + '">' + val + '</option>';
    })
};
// 2.2
// Filter function for City to display table
function showCity(x) {

    console.log(x.options[x.selectedIndex].text);

    // Filtering data with specified variable
    var filteredData = tableData.filter(data => data.city === x.options[x.selectedIndex].text);

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
};

// 3.1
// Drop down list for State
function populateState() {

    // selecting tag
    var select = document.getElementById("state-select");

    // empty object to store list
    var unique = {};

    // for loop to find unique values
    tableData.forEach(data => {
        unique[data.state] = unique[data.state] || {};
    })

    // Creating dropdown list
    Object.entries(unique).forEach(([val]) => {
        select.innerHTML = select.innerHTML +
            '<option value="' + val + '">' + val + '</option>';
    })
};
// 3.2
// Filter function for State to display table
function showState(x) {

    // Filtering data with specified variable
    var filteredData = tableData.filter(data => data.state === x.options[x.selectedIndex].text);

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
}

//4.1
// Drop down list for Country
function populateCountry() {

    // selecting tag
    var select = document.getElementById("country-select");

    // empty object to store list
    var unique = {};

    // for loop to find unique values
    tableData.forEach(data => {
        unique[data.country] = unique[data.country] || {};
    })

    // Creating dropdown list
    Object.entries(unique).forEach(([val]) => {
        select.innerHTML = select.innerHTML +
            '<option value="' + val + '">' + val + '</option>';
    })
};
// 4.2
// Filter function for Country to display table
function showCountry(x) {

    // Filtering data with specified variable
    var filteredData = tableData.filter(data => data.country === x.options[x.selectedIndex].text);

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
}

// 5.1
// Drop down list for Shape
function populateShape() {

    // selecting tag
    var select = document.getElementById("shape-select");

    // empty object to store list
    var unique = {};

    // for loop to find unique values
    tableData.forEach(data => {
        unique[data.shape] = unique[data.shape] || {};
    })

    // Creating dropdown list
    Object.entries(unique).forEach(([val]) => {
        select.innerHTML = select.innerHTML +
            '<option value="' + val + '">' + val + '</option>';
    })
};
// 5.2
// Filter function for Shape to display table
function showShape(x) {

    // Filtering data with specified variable
    var filteredData = tableData.filter(data => data.shape === x.options[x.selectedIndex].text);

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
}

// Refresh button function
refreshButton.on("click", function () {

    // remove any data from the table
    tbody.html("");

    // Displays table 
    data.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([, value]) => {
            var tableData = row.append("td");
            tableData.text(value);
        })
    });
});
