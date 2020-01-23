// from data.js
var tableData = data;
var tbody = d3.select("tbody")

// Select the button
var button = d3.select("#filter-btn");

// YOUR CODE HERE!
// Step 1: Loop Through `data` and console.log each weather report object
// Step 2: Use d3 to append one table row `tr` for each weather report object
// Step 3: Use `Object.entries` to console.log each weather report value
// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// Step 5: Use d3 to update each cell's text with weather report values

data.forEach(sighting => {
    // console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        // console.log(key, value);
        var tableData = row.append("td");
        tableData.text(value);
    })
});

button.on("click", function () {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);

    // Then, select the table
    var summary = d3.select(".table>tbody")

    // remove any data from the table
    summary.html("");

    //
    filteredData.forEach(sighting => {
        // console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([, value]) => {
            // console.log(key, value);
            var tableData = row.append("td");
            tableData.text(value);

        })
    });


});



