document.addEventListener('DOMContentLoaded', function () {
  const blueButton = document.getElementById("blue-button");
  const redButton = document.getElementById("red-button");
  const greenButton = document.getElementById("green-button");
  
  const grayButton = document.getElementById("gray-button");

  const textElement = document.getElementById("colorful-text");

  blueButton.onclick = function() {
    textElement.classList.add("blue");
    textElement.classList.remove("green");
    textElement.classList.remove("red");
    textElement.classList.remove("gray");
  }

  redButton.onclick = function() {
    textElement.classList.add("red");
    textElement.classList.remove("green");
    textElement.classList.remove("blue");
    textElement.classList.remove("gray");
  }

  greenButton.onclick = function() {
    textElement.classList.add("green");
    textElement.classList.remove("blue");
    textElement.classList.remove("red");
    textElement.classList.remove("gray");
  }

  grayButton.onclick = function() {
    textElement.classList.add("gray");
    textElement.classList.remove("blue");
    textElement.classList.remove("green");

    textElement.classList.remove("red");
  }

}, false);