var price1 = 31 ;
var price2 = 33;
var totalPrice = price1 + price2;
console.log(totalPrice);

var firstName = 'Muhammad ';
var lastName = 'Jayed' ;
var fullName = firstName +  ' ' + lastName; 
console.log(fullName);



//  convert string to number 
// (parseInt)

var price1 = '31' ;
var price2 = 33;
var totalPrice = price1 + price2;
console.log(totalPrice);


console.log(price1);
var priceNumber = parseInt(price1);
console.log(priceNumber);

// parseFloat

var gpa = '4.570';
var gpaNumber = parseFloat(gpa);
console.log(gpaNumber);

// typeof

var num1 = 100;
var num2 = '100';
var num3 = true;

var kiHoice;

console.log(typeof num3);


//  tofix
var num1 = 0.1;
var num2 = 0.4;
var sum = num1 + num2;

sum = sum.toFixed(2);
console.log(sum);
