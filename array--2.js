const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'agun'};
const friends = [13, 23, 45, 56, 67, 78, 89, 91];

function add(num1, num2){
    return num1 + num2;
} 

console.log(typeof country);
console.log(typeof age);
console.log(typeof student);
// console.log(typeof friends); array checking
console.log(Array.isArray(friends));
console.log(add);

// ------------- array er moddhe ache ki nai check
console.log(friends.includes(19));
console.log(friends.includes(45));

if(friends.indexOf(356) !== -1){

}

const newFriends = [12, 23, 24,25];
const allFriends = newFriends.concat(friends);
console.log(allFriends);


// ===========
// example 2=========
// ========
// slice slice slice


const moreFriends = [ 33, 44, 55, 66, 777, 88, 99];
const partial = friends.slice(2, 5);
console.log(partial);
console.log(friends);



// ===========
// example 3=========
// ========
// splice splice splice = ja kata hobe ta purno vabe kete jabe

const onekFriends = [ 33, 44, 55, 66, 777, 88, 99];
// const partial2 = onekFriends.splice(2, 5);
const partial2 = onekFriends.splice(2, 5, 88, 90, 890, 567);
console.log(partial2);
console.log(onekFriends);


// ===========
// example 4 =========
// ========
// remove Duplicate

const names =  ['babul', 'sabul', 'dabul', 'nibul', 'kibul', 'dabul', 'nibul', 'babul', 'babul' ];

function remoteDuplicate(names){
    const unique = []
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        console.log(name);
        if(unique.includes(name) === false){
            unique.push(name);
        }
    } 
    return unique;
}

const uniqueNames = remoteDuplicate(names);
console.log(uniqueNames);



//  problem on 
// ============== 
// foo and bar
// ==========

for( let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else if( i % 5 === 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
}


// wood...js
// making chair
// ==========

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(2, 3, 5);
console.log('total wood ', totalWood);



// ---===cheapest Mobile
// ==========

// =====

const phones = [
    {name: 'Samsung', camera: '12', storage: '32gb', price: 36000, color: 'silver' },
    {name: 'walton', camera: '10', storage: '32gb', price: 22000, color: 'silver' },
    {name: 'iphone', camera: '10', storage: '32gb', price: 76000, color: 'silver' },
    {name: 'vivo', camera: '10', storage: '32gb', price: 20000, color: 'silver' },
    {name: 'Oppo', camera: '12', storage: '32gb', price: 44000, color: 'silver' },
    {name: 'Nokia', camera: '12', storage: '32gb', price: 55000, color: 'silver' },
    {name: 'HTC', camera: '12', storage: '32gb', price: 900000, color: 'silver' }
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const index = i;
        const phone = phones[index]; 
        console.log(phone);
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);




// ======== Problem ***
// =====Shopping cart
// ====



const  shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 1100},
    {name: 'pant', price: 700},
    {name: 'belt', price: 150},
    {name: 'tupi', price: 110},
];

function totalCost(products){
    let sum =0; 
    for(let i = 0; i < products.length; i++){
        const index = i;
        const product = products[index];
        sum = sum + product.price;
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('total cost', expense);




//  quantity shopping cart
// ======
// ''''======



const  shoppingCartt = [
    {name: 'shoe', price: 1200, quantity: 2},
    {name: 'shirt', price: 1100, quantity: 3},
    {name: 'pant', price: 700, quantity: 5},
    {name: 'belt', price: 150, quantity: 6},
    {name: 'tupi', price: 110, quantity: 11},
];

function totalCost(products){
    let sum =0; 
    for(let i = 0; i < products.length; i++){
        const index = i;
        const product = products[index];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum;
}

const expenses = totalCost(shoppingCartt);
console.log('total cost', expenses);




// discount offer system
// /========
// -=-=-=-=-=-==-=-

/*
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket and the rest ticket will be 90 takka per piece
3. if you purchse more than 200 tickets
    first 100 -----> 100tk
    101-200 -----> 90tk
    200+ -----> 71tk    */



function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 71;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100price + restTicketPrice;
        return totalCost;
    }
}


const price = ticketPrice(211);
console.log(price);





// validition
// ======
////========


function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
        return 'please return a number'

    }
}
add('81', 55);







