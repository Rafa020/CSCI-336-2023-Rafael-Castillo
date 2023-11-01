document.addEventListener('DOMContentLoaded', function() {
  buildTable();
});

const buildTable = () => {
  const movieData = [
    {
      title: 'Die Hard',
      image: 'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      description: 'NYPD cop John McClane goes on a Christmas vacation to visit his wife Holly in Los Angeles where she works for the Nakatomi Corporation. While they are at the Nakatomi headquarters for a Christmas party, a group of robbers led by Hans Gruber take control of the building and hold everyone hostage, with the exception of John, while they plan to perform a lucrative heist. Unable to escape and with no immediate police response, John is forced to take matters into his own hands. ',
      link: 'https://www.imdb.com/title/tt0113277/'
    },
    {
      title: 'Get Rich Or Die Tryin',
      image: 'https://m.media-amazon.com/images/M/MV5BMTI4NTE0MTU2N15BMl5BanBnXkFtZTYwNzQ1OTc2._V1_FMjpg_UX1000_.jpg',
      description: 'After losing his mother to murder as a boy, Marcus (Curtis "50 Cent" Jackson) has little support in his life. He starts working for drug dealer Levar (Bill Duke) and his assistant (Adewale Akinnuoye-Agbaje). Although Marcus makes good money selling, his dream is to become a rapper. When he reunites with an old love (Joy Bryant) and is later shot numerous times during a robbery, Marcus decides its time to change his life. However, his old associates wont let him go so easily.',
      link: 'https://www.imdb.com/title/tt0113277/'
    },
    {
      title: 'Juice',
      image: 'https://filmartgallery.com/cdn/shop/products/Juice-Vintage-Movie-Poster-Original-1-Sheet-27x41_018855d4-4cb8-4a8c-a647-8fc43809b714.jpg?v=1642561438',
      description: 'Four Harlem friends -- Bishop (Tupac Shakur), Q (Omar Epps), Steel (Jermaine Hopkins) and Raheem (Khalil Kain) -- dabble in petty crime, but they decide to go big by knocking off a convenience store. Bishop, the magnetic leader of the group, has the gun. But Q has different aspirations. He wants to be a DJ and happens to have a gig the night of the robbery. Unfortunately for him, Bishop isnt willing to take no for answer in a game where everythings for keeps.',
      link: 'https://www.imdb.com/title/tt0113277/'
    },
    {
      title: 'Borat',
      image: "https://m.media-amazon.com/images/M/MV5BMTk0MTQ3NDQ4Ml5BMl5BanBnXkFtZTcwOTQ3OTQzMw@@._V1_.jpg",
      description: "A TV journalist from Kazakhstan hits the U.S. in this hilarious comedy based on the character from HBO's 'Da Ali G Show.'",
      link: 'https://www.imdb.com/title/tt0113277/'
    },
    {
      title: 'GoodFellas',
      image: 'https://images.squarespace-cdn.com/content/v1/5e7a8f6d95bc3643e73bc2e8/1587248432903-ORH0WRD2G8QNAZLG8VAK/goodfellas.png?format=2500w',
      description: 'A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes. A drug addiction and a few mistakes ultimately unravel his climb to the top. Based on the book "Wiseguy" by Nicholas Pileggi.',
      link: 'https://www.imdb.com/title/tt0113277/'
    },
    {
      title: 'Once Upon A Time In America',
      image: 'https://m.media-amazon.com/images/M/MV5BMmQzZjdmZDAtOGE2Yy00MmUwLTljYzgtZTMwMjk3ZDdiOWUyXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_.jpg',
      description: "Los Angeles street racer Dominic Toretto falls under the suspicion of the LAPD as a string of high-speed electronics truck robberies rocks the area. Brian O'Connor, an officer of the LAPD, joins the ranks of Toretto's highly skilled racing crew undercover to convict Toretto. However, O'Connor finds himself both enamored with this new world and in love with Toretto's sister, Mia. As a rival racing crew gains strength, O'Connor must decide where his loyalty really lies.",
      link: 'https://www.imdb.com/title/tt0113277/'
    },
    {
      title: 'The Fast And The Furious',
      image: 'https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      description: 'Set in the 1980s, the series centers around the residents of the fictional small town of Hawkins, Indiana, as they are plagued by a hostile alternate dimension known as the Upside Down, after a nearby human experimentation facility opens a gateway between it and the normal world.',
      link: 'https://www.imdb.com/title/tt0113277/'
    },
    {
      title: 'The GodFather',
      image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      description: 'The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.',
      link: 'https://www.imdb.com/title/tt0113277/'
    },
    {
      title: 'Black Panther',
      image: 'https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0%2C0%2C540%2C810',
      description: 'After the death of his father, T Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T Challas mettle as king -- and as Black Panther -- gets tested when hes drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.',
      link: 'https://www.imdb.com/title/tt0113277/'
    },
    {
      title: 'Avengers Infinity War',
      image: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
      description: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
      link: 'https://www.imdb.com/title/tt0113277/'
    },
    {
      title: 'Joker',
      image: 'https://pbs.twimg.com/media/EDEsh0gU4AUTO3P?format=jpg&name=900x900',
      description: 'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he is part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.',
      link: 'https://www.imdb.com/title/tt0113277/'
    },
    {
      title: 'Dunkirk',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQxbgp4ZRJr3tBkEJ7DO5KMdF6vGP7Q2HdOyvAhcv4KW_cqmMsk',
      description: 'In May 1940, Germany advanced into France, trapping Allied troops on the beaches of Dunkirk. Under air and ground cover from British and French forces, troops were slowly and methodically evacuated from the beach using every serviceable naval and civilian vessel that could be found. At the end of this heroic mission, 330,000 French, British, Belgian and Dutch soldiers were safely evacuated.',
      link: 'https://www.imdb.com/title/tt0113277/'
    },
    {
      title: 'Heat',
      image: 'https://m.media-amazon.com/images/M/MV5BYjZjNTJlZGUtZTE1Ny00ZDc4LTgwYjUtMzk0NDgwYzZjYTk1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      description: "Master criminal Neil McCauley (Robert De Niro) is trying to control the rogue actions of one of his men, while also planning one last big heist before retiring. Meanwhile, Lieutenant Hanna (Al Pacino) attempts to track down McCauley as he deals with the chaos in his own life, including the infidelity of his wife (Diane Venora) and the mental health of his stepdaughter (Natalie Portman). McCauley and Hanna discover a mutual respect, even as they try to thwart each other's plans.",
      link: 'https://www.imdb.com/title/tt0113277/'
    }
  ];

  const movieTable = document.getElementById('shows');
  const tableBody = document.createElement('tbody');

  movieData.forEach(show => {
    console.log(show.title);
    const tr = document.createElement('tr');
    const trHtml =
    `<tr>\n` +
    `  <td class="bg-dark">\n` +
    `    <div class="d-inline-flex bg-dark">\n` +
    `      <div>\n` +
    `        <img src="${show.image}" class="float-start" />\n` +
    `      </div>\n` +
    `      <div class="px-2">\n` +
    `        <h6 class="text-danger">${show.title}</h6>\n` +
    `        <p class="small m-0 text-light">${show.description}</p>\n` +
    '        <br>\n' +
    '        <a href="https://www.imdb.com/" target="_blank">' +
    '           <button type="button" class="btn btn-sm btn-warning">Learn More</button>' +
    '        </a>' +
    `      </div>\n` +
    `    </div>\n` +
    `  </td>\n` +
    `</tr>`;

    tr.innerHTML = trHtml;
    tableBody.appendChild(tr);
  });

  movieTable.appendChild(tableBody);
}