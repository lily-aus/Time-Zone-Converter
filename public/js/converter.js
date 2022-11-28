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

    // Setup AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/convert", true);
    xhttp.setRequestHeader("Content-Type", "application/json");

    // Tell AJAX request how to resolve 
    xhttp.onreadystatechange = () => {
        if (xhttp.status == 200) {
            let parsedData = JSON.parse(xhttp.response);

            // check the data received from microservice
            console.log(parsedData);

            // remove convert button
            const convertButton = document.querySelector(".btn2");
            convertButton.remove();

            // get a reference to the convert table
            let currentTable = document.getElementById("moreCity");
            let trs = currentTable.querySelectorAll("tr");

            // first remove the "remove" button
            // then add the converted date and time to the row
            for (let tr of trs) {
                let btn = tr.querySelector("td button");
                btn.remove();

                let city = tr.querySelector("td select");

                for (let city_ of parsedData.target) {
                    if (city.value == city_.city) {
                        const para = document.createElement("p");
                        para.setAttribute('class', 'convertStyle');
                        para.innerText = city_.datetime;
                        tr.appendChild(para);

                        break;
                    };
                };
            };
        }
        else if (xhttp.status != 200) {
            console.log("There was an error with the input.")
        }
    }


    // Send the request and wait for the response
    xhttp.send(JSON.stringify(dict));

}