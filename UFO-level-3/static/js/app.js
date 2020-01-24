// from data.js
var tableData = data;

// Define the table
var tbody = d3.select("tbody");

// Define the date filter button
var dateButton = d3.select("#date-filter-btn");

// Define the city filter button
var cityButton = d3.select("#city-filter-btn");

// Define the state filter button
var stateButton = d3.select("#state-filter-btn");

// Define the country filter button
var countryButton = d3.select("#country-filter-btn");

// Define the shape filer button
var shapeButton = d3.select("#shape-filter-btn");

// Define the refresh button
var refreshButton = d3.select("#refresh-btn");

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


// City button function
cityButton.on("click", function () {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#city");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(data => data.city.toLowerCase() === inputValue.toLowerCase());

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


// State button function
stateButton.on("click", function () {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#state");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(data => data.state.toLowerCase() === inputValue.toLowerCase());

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


// Country button function
countryButton.on("click", function () {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#country");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(data => data.country.toLowerCase() === inputValue.toLowerCase());

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


// Shape button function
shapeButton.on("click", function () {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#shape");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(data => data.shape.toLowerCase() === inputValue.toLowerCase());

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



window.onload = populate()

function populate() {
    // Testing to creat a drop down menu
    var citySelect = document.getElementById("city-select");

    // var uniqueCity = [];

    for (i = 0; i < tableData.length; i++) {
        if (tableData[i]['city'] === -1) {
            citySelect.innerHTML = citySelect.innerHTML +
                '<option value="' + tableData[i].city + '">' + tableData[i].city+ '</option>';
        }
    }

    // console.log(uniqueCity)

    // for (var i = 0; i < uniqueCity.length; i++) {

    //     citySelect.innerHTML = citySelect.innerHTML +
    //         '<option value="' + uniqueCity[i] + '">' + uniqueCity[i] + '</option>';

    // };
    // console.log(uniqueCity)
};


function show(tableData) {

    //console.log(tableData);

    var filteredData = tableData.filter(data => data.city === tableData.value);

    // Displayr filtered data on console
    console.log(filteredData);
    //console.log(uniqueCity);
    console.log(data.city);

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


// citySelect.on("click", function () {
//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#city-select");

//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");

//     var filteredData = tableData.filter(data => data.city.toLowerCase() === inputValue.toLowerCase());


//     // Displayr filtered data on console
//     console.log(filteredData);

//     // remove any data from the table
//     tbody.html("");

//     // Loop through filered data and append to table
//     filteredData.forEach(sighting => {
//         var row = tbody.append("tr");
//         Object.entries(sighting).forEach(([, value]) => {
//             var tableData = row.append("td");
//             tableData.text(value);
//         })
//     });
// });


