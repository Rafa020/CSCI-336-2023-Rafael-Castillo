document.addEventListener("DOMContentLoaded", function () {
  const movieDiv = document.getElementById("movies");
  const movieData = [
    {
      name: "Get Rich Or Die Tryin",
      description:
        "After losing his mother to murder as a boy, Marcus (Curtis 50 Cent Jackson) has little support in his life. He starts working for drug dealer Levar (Bill Duke) and his assistant (Adewale Akinnuoye-Agbaje). Although Marcus makes good money selling, his dream is to become a rapper.",
      url: "./img/50cent.jpeg",
    },
    {
      name: "Juice",
      description:
        "The film touches on the lives of four black youths growing up in Harlem, following their day-to-day activities, their struggles with police harassment, rival neighborhood gangs and their families. The film is the writing and directing debut of Dickerson and features Shakur in his acting debut.",
      url: "./img/Juice-cover.jpeg",
    },
    {
      name: "The Wolf of Wall Street",
      description:
        "Jordan Belfort's memoir about his rapid rise and fall as a stockbroker on Wall Street. It offers a wild and candid account of his excessive lifestyle and illegal activities, providing an inside look into the world of high finance.",
      url: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Borat(2006)",
      description:
        "Sacha Baron Cohen brings his Kazakh journalist character Borat Sagdiyev to the big screen for the first time. Leaving his native Kazakhstan, Borat travels to America to make a documentary. As he zigzags across the nation, Borat meets real people in real situations with hysterical consequences.",
      url: "./img/Borat.jpg",
    },
    {
      name: "Avengers Infinity War",
      description:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      url: "./img/Avengers.jpg",
    },
    {
      name: "Dunkirk",
      description:
        "historical war thriller film written, directed and produced by Christopher Nolan that depicts the Dunkirk evacuation of World War II from the perspectives of the land, sea and air. It was produced by Nolan and Emma Thomas.",
      url: "./img/Dunkirk.jpg",
    },
    {
      name: "The Fast and The Furious",
      description:
        "The film tells the story of an undercover cop, Brian (Paul Walker), who infiltrates a street racing team headed by Dominic Toretto (Vin Diesel). But racing isn't all Dominic is suspected of - the cops believe he's the leader of a gang that hijacks trucks.",
      url: "./img/f&f-border.jpg",
    },
    {
      name: "Black Panther",
      description:
        "Thousands of years ago, five African tribes war over a meteorite containing the metal vibranium. One warrior ingests a heart-shaped herb affected by the metal and gains superhuman abilities, becoming the first Black Panther. He unites all but the Jabari Tribe to form the nation of Wakanda.",
      url: "./img/BlackPanther.jpg",
    },
    {
      name: "The Godfather (1972)",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      url: "./img/godfather-cover.jpg",
    },
    {
      name: "Once Upon A Time In America",
      description:
        "In 1968, the elderly David Noodles Aaronson (Robert De Niro) returns to New York, where he had a career in the criminal underground in the '20s and '30s. Most of his old friends, like longtime partner Max (James Woods), are long gone, yet he feels his past is unresolved.",
      url: "./img/OnceUponATime.webp",
    },
  ];

  const movieMap = movieData.map((movie) => {
    movieDiv.innerHTML +=
      '<div class="text-white col-sm-5 w-25 card bg-dark border border-rounded" style="width:18rem;">\n' +
      '      <img id="movie-images" src =' +
      movie.url +
      ' class="card-img-top mt-2 ms-3">\n' +
      "       </img>\n" +
      '       <div class="card-body">\n' +
      '          <h5 class="card-title text-white">' +
      movie.name +
      "\n" +
      "           </h5>\n" +
      '           <p class="card-text text-white" id="style-description">\n' +
      movie.description +
      "\n" +
      "           </p>\n" +
      '           <a href="#" class="btn btn-warning" id="learn-more">\n' +
      "             Learn More\n" +
      "           </a>";
    ("       </div>\n");
    ("</div>\n");
  });
});
