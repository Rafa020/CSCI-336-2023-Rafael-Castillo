document.addEventListener('DOMContentLoaded', function(){
    let blueButton = document.getElementById("blue-alert-btn");
    let greenButton = document.getElementById("green-alert-btn");
    let yellowButton = document.getElementById("yellow-alert-btn");
    let darkButton = document.getElementById("dark-alert-btn");
    let clearButton = document.getElementById("clear-alerts-btn");
    let blueAlert = document.getElementById("alerts1");
    let greenAlert = document.getElementById("alerts2");
    let warningAlert = document.getElementById("alerts3");
    let darkAlert = document.getElementById("alerts4");

    blueAlert.style.display = "none";
    greenAlert.style.display = "none";
    warningAlert.style.display = "none";

    blueButton.onclick = function(){
        blueAlert.style.display = "block";
    };

    greenButton.onclick = function(){
        greenAlert.style.display = "block";
    };

    yellowButton.onclick = function(){
        warningAlert.style.display = "block";
    };

    darkButton.onclick = function() {
        darkAlert.style.display = "block"; 
    };

    clearButton.onclick = function() {
        warningAlert.style.display = "none";
        greenAlert.style.display = "none";
        blueAlert.style.display = "none";
        darkAlert.style.display = "none";
    };


    







});