const { json } = require("express");

function convertTime() {
    // Get a reference to the base city table
    let baseTable = document.getElementById('baseSelection');

    // Get the value from the base city table
    let baseCity = document.getElementById("baseCity").value;
    let baseDate = document.getElementById("baseDate").value;
    let baseTime = document.getElementById("baseTime").value;

    combDateTime = (baseDate + "T" + baseTime + ":00");

    // Get the value of the target cities
    let targets = document.getElementsByClassName("input-more-city");
    let targetCity = [].map.call(targets, target => target.value);


    let dict = {
        "origin": { "city": baseCity, "datetime": combDateTime },
        "target": targetCity
    }


    console.log(JSON.stringify(dict));

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/test.html", true);
    xhttp.setRequestHeader("Content-Type", "application/json");

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(dict));

}