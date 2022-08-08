var allName = ['Muhammad', 'Jayed', 'abu', 'Musa', 'Shofiq'];
console.log(allName.length);

// get element by index
var numbers = [45, 55, 67, 89, 45, 29, 20, 21];
console.log(numbers[3]);

// or
var elements = numbers[3];
console.log(elemnts);

// add an elements
var numbers = [45, 55, 67, 89, 45, 29, 20, 21];
numbers[1] = 77;
numbers[3] = 44;


// find index of an elements
var positionIndex = numbers.indexOf(67);
console.log(positionIndex);

// jodi kono upadan array er moddhe na thake tahole result hobe -1.
var naiIndex = numbers.indexOf(90);
console.log(positionIndex);


// push pop .js


var numbers = [34, 45, 56, 67,89];
numbers.push[63];
console.log(numbers);

var friends = ['balam', 'salam', 'kalam'];
friends.push('ddalam');
console.log(friends);


//  use pop to get read of last elemnts

var friends = ['balam', 'salam', 'kalam'];
friends.pop();
console.log(friends);

// set a variabla of the pop elements
var friends = ['balam', 'salam', 'kalam'];
var element = friends.pop();
console.log(friends);
console.log(element);


// comparison
console.log(5 > 6);


//  shoman bujhanoir jonno ==
console.log(5 == 6);

// oshoman
console.log(5 != 6);


//  choto othoba shoman 
console.log(5 <= 6);

// boro othoba shoman
console.log(5 >= 6 )


var num1 = 55;
var num2 = 66;

console.log( num1 <= num2);


//  onek gula tulona bujhate
money1 > money2 && money1 < money2
money1 > money2 || money1 < money2


// conditional .js
var iphonePricee = 79000;
var myBudget = 9500;
if(iphonePricee <= myBudget){
    console.log('iphone kine futani marbo')
}

// else 

var chickenPrice = 500;
var myMoney = 51;
if (chickenPrice <= myMoney){
    consoke.log('chicken khamu or hadddi kabo')
}

// if( chickenPrice > myMoney){
//     console.log(' dal khabo')
// }

else{
    console.log(' i will eat potato')
}

// multiple condition
//  tulona bujhate (==) double == use hoi
var isGraguated = true;
if(isGraguated == true){
    console.log('esho solat porbo')
}
else{
    console.log('tobuyo solat aday korbo')
}



var isGraguated = true;
var sallery = 25000;
if(isGraguated == true && salary > 50000){
    console.log('esho solat porbo')
}
else{
    console.log('tobuyo solat aday korbo')
}

//  onekgul ashorto akotre

var isGraguated = true;
var salary = 25000;
var cars = 0;
if(isGraguated == true && salary > 50000 && cars <= 1){
    console.log('esho solat porbo')
}
else{
    console.log('tobuyo solat aday korbo')
}

// eta othoba ota

var isGraguated = true;
var salary = 25000;
var cars = 0;
if(isGraguated == true || salary > 50000 || cars <= 1){
    console.log('esho solat porbo')
}
else{
    console.log('tobuyo solat aday korbo')
}

// 2 ta theke akta kinba oita\
var isGraguated = true;
var salary = 25000;
var cars = 0;
if((isGraguated == true && salary > 50000) || cars <= 1){
    console.log('esho solat porbo')
}
else{
    console.log('tobuyo solat aday korbo')
}


// multi stage  conditional 

var money = 10;
var danishPrice = 45;
var butterBread = 35;
var toastBiscut = 25;
var chaCoffe = 15;

if(danishPrice < money){
    console.log('danish nibo')
}
else if(butterBread < money){
    console.log('toastBiscut  money');
}
else if(toastBiscut < money){
    console.log('ki achee r  money');
}
else if(chaCoffe < money){
    console.log('onek beshi ache  money');
}
else{
    console.log('shudu cha e valo')
}



//  nasted conduition

var englidh = true;
var bangla = true;
var math = false;
if( englidh == true){
    if( bangla == true){

    }
    else{
        console.log(' ki mone hoi tomar');
    }
 }