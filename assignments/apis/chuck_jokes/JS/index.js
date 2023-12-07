document.addEventListener('DOMContentLoaded', function(){
   
    getJokes();

    
});




    const getJokes = (data) => {
        const temp = data;
        const jokeRow = document.getElementById("jokes");
        const jokeBody = document.createElement("section");


        
        for (let i = 0; i < 24; i++){
            const xhr = new XMLHttpRequest();
        
       
      
    
    
            xhr.onload = () => {
                const response = xhr.response;
                console.log(xhr.status);
                console.log(response);

                
                
    
                if (xhr.status === 200){
                    const div = document.createElement('div');
                    div.classList.add("col");
                    const ID = String(response.id);
                    const category = String(response.category);

                    const author = String(response.author);
                    const joke = String(response.value);
                    console.log(author, joke);

                    
                    const divHtml = 
                    '    <br>\n' +
                    '      <div class="card border border-black rounded" style="width: 18rem;background-image: url(img/bg-card.gif);">\n' +
                    '       <br>\n' +
                    '       <h5 class="card-title" style="font-family:  Arial, Helvetica, sans-serif;color:white;"> JOKE #' + ID + '</h5>\n' +
                    '       <div class="card-body">\n' +
                    '           <p class="card-text border" style="font-family: Arial, Helvetica, sans-serif;color:white;">' + joke + '</p>\n' +
                    '            <br>' + 
                    '           <p class="card-text" style="font-family: Arial, Helvetica, sans-serif;color:white;"> Joke author: ' + author + '</p>\n' +
                    '       </div>\n' +
                    '     </div>\n';
                    div.innerHTML = divHtml;
                    jokeRow.appendChild(div);
                    
                }
    
                else{
                    alert('ERROR 404');
                }
        
            }
            xhr.responseType = 'json';
            xhr.open('GET', 'https://md-chuck-norris-jokes.herokuapp.com/jokes/random/?X-API-Key=d3f43c4f-9ac9-45a2-8976-f26ab574a3c0');
            xhr.send();
        }

       
        
    
    
    }

    const generateButton = document.getElementById("GetJoke");

    function generator() {
         
        const xhr = new XMLHttpRequest();
        
       
      
    
    
        xhr.onload = () => {
            const response = xhr.response;
            console.log(xhr.status);
            console.log(response);

            
            

            if (xhr.status === 200){
                const jokeRow = document.getElementById("randJoke");
                const jokeBody = document.createElement("section");
                const div = document.createElement('div');
                const ID = String(response.id);
                const category = String(response.category);

                const author = String(response.author);
                const joke = String(response.value);
                console.log(author, joke);

                
                const divHtml = 
                '       <br>\n' +
                '       <h5 style="font-family:  Arial, Helvetica, sans-serif;color:black;"> JOKE #' + ID + '</h5>\n' +
                '       <br>\n'+
                '       <p style="font-family: Arial, Helvetica, sans-serif;color:black;">' + joke + '</p>\n' +
                '       <br>\n' + 
                '       <p style="font-family: Arial, Helvetica, sans-serif;color:black;"> Joke author: ' + author + '</p>\n';
                div.innerHTML = divHtml;
                jokeRow.appendChild(div);
                console.log("NEW:", joke);
                
            }

            else{
                alert('ERROR 404');
            }
    
        }
        xhr.responseType = 'json';
        xhr.open('GET', 'https://md-chuck-norris-jokes.herokuapp.com/jokes/random/?X-API-Key=d3f43c4f-9ac9-45a2-8976-f26ab574a3c0');
        xhr.send();

    }


  


   




