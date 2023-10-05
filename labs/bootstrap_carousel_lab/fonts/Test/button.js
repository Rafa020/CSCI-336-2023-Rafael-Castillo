document.addEventListener('DOMContentLoaded', function(){

  const firstB = document.getElementsByTagName("button")[0];

  firstB.onclick = function() {
    let x = document.getElementById("sub-border");


    if (x.style.display === "none"){
        x.style.display = "block";
    }

    else{
        x.style.display = "none";
    }

  }



  const AllProductsB = document.getElementsByTagName("button")[1];

  AllProductsB.onclick = function() {
    let x = document.getElementById("Product-list");


    if (x.style.display === "none"){
        x.style.display = "block";
    }

    else{
        x.style.display = "none";
    }

  }



    



});