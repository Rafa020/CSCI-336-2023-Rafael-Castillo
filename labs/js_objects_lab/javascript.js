console.log("But there is something to see here...");

const numbers = [4, 3, -2, 0, 1, -5, -1, 6];
const values = {}

let positiveCount = getPositives(numbers);
let negativeSum = getNegatives(numbers);
values.positive = positiveCount;
values.negative = negativeSum;


function getPositives(values){
    let count = 0;
    for (let i = 0; i < values.length; ++i){
        if (values[i] > 0){
            count += 1;
        }

    }
    return count;

}

function getNegatives(values){
    let sum = 0;
    for (let i = 0; i < values.length; i++){
        if (values[i] < 0){
            sum += values[i];
        }
    }
    return sum;
}
console.log("Positive count: " + values.positive + "\nNegative sum: " + values.negative);