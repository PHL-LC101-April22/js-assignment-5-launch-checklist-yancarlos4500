// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {


    document.getElementById("missionTarget").innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name} </li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`;

}

function validateInput(testInput) {

    if(testInput === "") return "Empty";
    else if(isNaN(testInput) == true) return "Not a Number";
    else return "Is a Number";
    
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if(validateInput(pilot) == "Not a Number")
    {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
    }
    else 
    {
        return alert('Make sure to enter valid information for each field!');
    }
    if(validateInput(copilot) == "Not a Number")
    {
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`;
    }
    else 
    {
        return alert('Make sure to enter valid information for each field!');
    }
    if(validateInput(fuelLevel) == "Is a Number" && validateInput(cargoLevel) == "Is a Number")
    {

        if(fuelLevel >= 10000 && cargoLevel >= 10000)
        {
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
            document.getElementById("launchStatus").style.color = "green";

            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        }
        else
        {
            if(fuelLevel < 10000) {
                document.getElementById("fuelStatus").innerHTML = "Fuel level is too low for launch";
            }

            if(cargoLevel < 10000) {
                document.getElementById("cargoStatus").innerHTML = "Cargo mass is too high for launch";
            }
         
        
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
        }


        list.style.visibility='visible';
        
    }
    else 
    {
        return alert('Make sure to enter valid information for each field!');
    }

   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
