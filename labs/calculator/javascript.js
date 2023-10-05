document.addEventListener('DOMContentLoaded', function() {
   const addButton = document.getElementById("add-button");
   const subtractButton = document.getElementById("subtract-button");
   const resetButton = document.getElementById("reset-button");
   const result = document.getElementById("result-value");
   const valA = document.getElementsByTagName("input")[0];
   const valB = document.getElementsByTagName("input")[1];
   

   addButton.onclick = function() {
      
      let a = valA.value;
      let b = valB.value;
      if (a.length === 0 && b.length === 0){
         result.innerHTML = "INAVLID INPUT NUMBERS";
      }

      else if (a.length === 0 && b.length > 0){
         result.innerHTML = "ERROR: NEED AN INPUT FOR A";
      }

      else if (a.length > 0 && b.length === 0){
         result.innerHTML = "ERROR: NEED AN INPUT FOR B";
      }


      else{
         let sum = (a * 1 + b * 1);
         const OUTPUT = sum;
         result.innerHTML = sum;
      }
   }

   subtractButton.onclick = function() {
      
      let a = valA.value;
      let b = valB.value;
      
      if (a.length === 0 && b.length === 0){
         result.innerHTML = "INAVLID INPUT NUMBERS";
      }

      else if (a.length === 0 && b.length > 0){
         result.innerHTML = "ERROR: NEED AN INPUT FOR A";
      }

      else if (a.length > 0 && b.length === 0){
         result.innerHTML = "ERROR: NEED AN INPUT FOR B";
      }


      else{
         let sum = (a * 1 - b * 1);
         const OUTPUT = sum;
         result.innerHTML = sum;
      }
   }


   resetButton.onclick = function() {
      let test = valA.value;

      result.innerHTML = "n/a";
      valA.innerHTML = null;
      valB.innerHTML = null;
      
      

   }

   

}, false);