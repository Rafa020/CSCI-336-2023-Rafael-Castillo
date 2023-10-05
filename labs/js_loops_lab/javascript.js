

const numbers = [4, 3, -2, 0, 1, -5, -1, 6];
let x = 0;
let y = 0;
for(let i = 0; i < numbers.length; i++){

    if (numbers[i] > 0){
        x += 1; 
    }

    else{
        y += numbers[i];
    }

}

let positiveOutput = "Positive count: " + x;
let negativeOutput = "Negative sum: " + y;

console.log(positiveOutput + "\n" + negativeOutput);