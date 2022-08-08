

// function declration
function startFan(){
    console.log('start fan');
    console.log('walk towards the swich');
    console.log('press the swich')
} 

startFan();

// example 2

function bringShingara(money){
    console.log('ato taka  dichen:', money);
    console.log('ai nen shingara');
    console.log('ji thanks')
} 

var taka = 101;
bringShingara(taka);


//  akadhik peramioter
function add(num1, num2){
    console.log('going to add', num1, num2);
}

add(100, )


function sum(a, b, c, d, e){
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}

sum(15, 35, 36)

function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return  sum //15;
}

var total = add( 45, 15);
console.log('total', total);

//  example return 2
function anoShingara(money){
    var shingaraPrice = 10;
    var quantity = money / shingaraPrice;
    return quantity;
}

var myTaka = 230;
var shingaras = anoShingara(myTaka);
console.log('mot shingara', shingaras);


// example 3
function getPrice(assign1, assign2, assign3){
    const totalMark = [assign1 + assign2 + assign3];
    const avarage = totalMark / 3 ;
    return avarage;
}

const num1 = 11;
const num2 = 22;
const num3 = 33;

const mulMarks = getPrice(num1, num2 , num3);
console.log('full marks....', mulMarks)


// example 4

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(11, 13);
const result2 = add(23, 44);
const finalmarks = add(result1, result2);

console.log(finalmarks)


// object

var myComputer = {
    brand: 'hp',
    price: 'jani na',
    color: 'silver',
    number: 90000
}

console.log(myComputer.brand);
console.log(myComputer.number)
console.log(myComputer);


//  example 

var shopingCard = {
    books: 3,
    sunGlass: 2,
    keyboard: 5,
    pen: 5
}


//  get property name by 3 method
var penCount = shopingCard.pen;
var penCount2 = shopingCard['pen'];

var popertyName = 'books';
var propertyValues = shopingCard[popertyName];

//  get key
var properties = Object.keys(shopingCard);
var propertiesValues = Object.values(shopingCard);
console.log()

// set property values 

shopingCard.books = 15;
shopingCard['books'] = 35;


//  example *****

var shoppingItems = {
    Kitab: 5,
    books: 6, 
    keyboard: 8, 
    shoes: 9, 
    glass: 9, 
    tin: 4
}

const keys = Object.keys(shoppingItems);
console.log(keys);

const values = Object.values(shoppingItems);
console.log(values);

for(var i = 0 ; keys.length ; i++){
    var propertyName = keys[i];
    var propertyValues = shoppingItems[propertyName];
     console.log(propertyName, propertyValues);
}


// fo in loop

for(var propertyName in shoppingItems){
    const value = shoppingItems[propertyName];
    console.log(propertyName, value) ;

}

const color = 'green';
if(color === 'white'){
    console.log('you are my friend');
}
else if(color === 'red'){
    console.log('you are my friend')
}
else if(color === 'black'){
    console.log('kothay tui akhon')
}
else if(color === green){
    console.log('akhon thik acheeee')
}
else{
    console.log('thik nai')
}