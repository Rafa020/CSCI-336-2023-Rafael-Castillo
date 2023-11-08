document.addEventListener('DOMContentLoaded', function() {
  getDoggo();

  const doggoBtn = document.getElementById('doggo-btn');
  //When the New Doggo button is clicked on the website it runs the function getDoggo = () => {
 // }
  doggoBtn.onclick = getDoggo;

  const doggoImg = document.getElementById('doggo-img');
  doggoImg.onerror = () => {
    doggoImg.src = 'https://i.imgflip.com/849ugl.jpg';
  }
});

const getDoggo = () => {

  const xhr = new XMLHttpRequest();

  xhr.onload = () => {

    const response = xhr.response;

    //Gets the value of the img tag in HTML
    const doggoImg = document.getElementById('doggo-img');

//gets the link in the url property what the api generates for EX: {"fileSizeBytes":2071721,"url":"https://random.dog/b0b5f8cd-2dae-4c46-8748-d56b84974279.jpg"} 
//we have to get the url section so we dont have to use htmlCode[0] we use url to get the url property (we call to find the property of the url key)
    doggoImg.src = response.url;
  };

  //specifies the type of data the GET call will give us different api's can have different format responses with data so check before
  xhr.responseType = 'json';

  //Does a GET call to get the random image of a dog
  //THE LINK IS THE API LINK
  xhr.open('GET', 'https://random.dog/woof.json');
  xhr.send();

}
