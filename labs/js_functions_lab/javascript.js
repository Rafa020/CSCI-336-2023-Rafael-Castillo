console.log("But there is something to see here...");

const numbers = [4, 3, -2, 0, 1, -5, -1, 6];
let positiveCount = 0;
let negativeSum = 0;
positiveCount = findPositive(numbers);
negativeSum = findNegative(numbers);

function findPositive(Values){
    let countPositive = 0;
    for (let i = 0; i < Values.length; i++){
        if (Values[i] > 0){
            countPositive += 1;

        }
    }
    return countPositive;
}


function findNegative(Values){
    let sumNegative = 0;
    for (let i = 0; i < Values.length; ++i){
        if (Values[i] < 0){
            sumNegative += Values[i];
        }
    }
    return sumNegative;
}

// Maybe write your function here.
console.log("Positive count: " + positiveCount + "\nNegative sum: " + negativeSum);
// Maybe call your function here.
// Maybe output the results here with console.log.