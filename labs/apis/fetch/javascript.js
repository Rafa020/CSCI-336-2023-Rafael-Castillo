document.addEventListener("DOMContentLoaded", function () {
  getPun();
});

const getPun = () => {
  const apiUrl = "https://punapi.rest/api/pun";

  fetch(apiUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const jokeTag = document.getElementById("pun-content");
      jokeTag.innerHTML += data.pun;
    })
    .catch(function (error) {
      console.error("Error fetching joke:", error);
    });
};
