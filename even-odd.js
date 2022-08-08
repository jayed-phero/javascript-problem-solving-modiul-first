//  even Odd

function isEven(number){
    const reminder = number % 2;
    if(reminder === 0){
        return  true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(303);
// console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
// console.log(herNumberIsEven);


// leap Year
function isLeapYear (year){
    const reminder = year % 4;
    if (reminder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myYearIs = isLeapYear(1933);
console.log('myYear:', myYearIs);
const herYearIs = isLeapYear(1960);
console.log('herYear:', herYearIs);


//  calculator

function getSumOfAnArray(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        const index = 1;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element , sum);
    }
    return sum;
}

const myNumbers = [12, 65, 45, 78, 45, 91];
getSumOfAnArray(numbers);



// example 2 get even numbers
function getOddNumbersOfAnArray (numbers){
    for(let i = 0; i< numbers.length; i++ ){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 0){

        }
    }
}

const youNumbers = [12, 65, 45, 78, 45, 91];
getOddNumbersOfAnArray(youNumbers);
getSumOfAnArray(youNumbers);




// example 2 get odd numbers
function getOddNumbersOfAnArray (numbers){
    const oddNumbers = [];
    for(let i = 0; i< numbers.length; i++ ){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myYouNumbers = [12, 65, 45, 78, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myYouNumbers);
console.log(oddNumbers);
getSumOfAnArray(myYouNumbers);



// multiplication
function factorial ( number){
    // let result = 0;
      let result = 1;
    for(let i = 0; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result =  factorial(9);


//  reverse way of function and multiplication
function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
}

const number = 5 ;
const fact = factorial(numberwwq);
console.log('factorial of 9:', fact)