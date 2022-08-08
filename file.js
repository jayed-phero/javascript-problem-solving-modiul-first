// // var numbers = [45, 55, 67, 89, 45, 29, 20, 21];
// //  console.log(numbers[3]);

// // // or
// // var elements = numbers[3];
// // console.log(elemnts);


// var numbers = [45, 55, 67, 89, 45, 29, 20, 21];
// // numbers[1] = 77;
// // numbers[3] = 44;
// numbers[5] = 101;
// console.log(numbers[4]);


// var friends = ['balam', 'salam', 'kalam'];
// friends.push('ddalam');
// console.log(friends);


// //  use pop to get read of last elemnts

// var friends = ['balam', 'salam', 'kalam'];
// friends.pop();
// console.log(friends);

// // get a pop variable
// var friends = ['balam', 'salam', 'kalam'];
// var element = friends.pop();
// console.log(friends);
// console.log(element);


// // comparison
// console.log(5 > 6);


// conditional .js
// var iphonePricee = 79000;
// var myBudget = 9500;
// if(iphonePricee < myBudget){
//     console.log('iphone kine futani marbo');
// }

// var chickenPrice = 500;
// var myMoney = 51;
// if (chickenPrice <= myMoney){
//     console.log('chicken khamu or hadddi kabo');
// }

// else{
//     console.log(' i will eat potato')
// }


// var isGraguated = true;
// var salary = 250000;
// if(isGraguated == true && salary > 50000){
//     console.log('esho solat porbo')
// }
// else{
//     console.log('tobuyo solat aday korbo')
// }




// var isGraguated = true;
// var salary = 250000;
// var cars = 1;

// if(isGraguated == true && salary > 50000 && cars <= 1){
//     console.log('esho solat porbo');
// }
// else{
//     console.log('tobuyo solat aday korbo');
// }


// var firstName = 'Muhammad ';
// var lastName = 'Jayed' ;
// var fullName = firstName +  '' + lastName;
// console.log(fullName);


//  convert string to number

// var price1 = '31' ;
// var price2 = 33;
// var totalPrice = price1 + price2;
// console.log(totalPrice);

// console.log(price1);
// var priceNumber = parseInt(price1);
// console.log(priceNumber);


// var gpa = '4.570';
// var gpaNumber = parseFloat(gpa);
// console.log(gpaNumber);


// var num1 = 100;
// var num2 = '100';
// var num3 = true;

// console.log(typeof num3);


// //  tofix
// var num1 = 0.1;
// var num2 = 0.2;
// var sum = num1 + num2;

// sum = sum.toFixed(2);
// // sum = parseFloat(sum);
// // console.log(sum);

// var iphonePricee = 79000;
// var myBudget = 9500;
// if(iphonePricee <= myBudget){
//     console.log('iphone kine futani marbo')
// // }

// function add(number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return  sum //15;
// // }

// // var total = add( 45, 15);
// // console.log('total', total);




// // example 3
// function getPrice(assign1, assign2, assign3){
//     const totalMark = [assign1 + assign2 + assign3];
//     const avarage = totalMark / 3 ;
//     return avarage;
// }

// const num1 = 11;
// const num2 = 22;
// const num3 = 33;

// const mulMarks = getPrice(num1, num2 , num3);
// // console.log('full marks....')


// function add(num1, num2){
//     const sum = num1 + num2;
//     return sum;
// }

// const result1 = add(11, 13);
// const result2 = add(23, 44);
// const finalmarks = add(result1, result2);

// // console.log(finalmarks)


// var shoppingItems = {
//     Kitab: 5,
//     books: 6, 
//     keyboard: 8, 
//     shoes: 9, 
//     glass: 9, 
//     tin: 4
// }

// const keys = Object.keys(shoppingItems);
// console.log(keys);

// const values = Object.values(shoppingItems);
// console.log(values);

// // for(var i = 0 ; i < keys.length ; i++){
// //     var propertyName = keys[i];
// //     var propertyValues = shoppingItems[propertyName];
// //     console.log(propertyName, propertyValues);
// // }

// for(var propertyName in shoppingItems){
//     const value = shoppingItems[propertyName];
// //     console.log(propertyName, value) ;

// // }


// const color = 'green';
// if(color === 'white'){
//     console.log('you are my friend');
// }
// else if(color === 'red'){
//     console.log('you are my friend');
// }
// else if(color === 'black'){
//     console.log('kothay tui akhon');
// }
// else if(color === green){
//     console.log('akhon thik acheeee')
// }
// else{
//     console.log('thik nai');
// }

// // swich
// switch(color){
//     case 'green':
//         console.log('you are a green friend');
//         break;
//     case  'blue':
//         console.log('you are a blue Friend');
//         break;
//     case 'white':
//         console.log('you are mu laslflksfj');
//         break;
//     default:
//         console.log('your are a kala dslk')

// }



// //  calculator

// function getSumOfAnArray(numbers){
//     let sum = 0
//     for(let i = 0; i < numbers.length; i++){
//         const index = 1;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element , sum);
//     }
//     return sum;
// }

// const myNumbers = [12, 65, 45, 78, 45, 91];
// getSumOfAnArray(numbers);



// example 2 get even numbers
// function getOddNumbersOfAnArray (numbers){
//     for(let i = 0; i< numbers.length; i++ ){
//         const index = i;
//         const element = numbers[index];
//         if(element % 2 === 0){

//         }
//     }
// }

// const youNumbers = [12, 65, 45, 78, 45, 91];
// getOddNumbersOfAnArray(youNumbers);
// getSumOfAnArray(youNumbers);




// // example 2 get odd numbers
// function getOddNumbersOfAnArray (numbers){
//     for(let i = 0; i< numbers.length; i++ ){
//         const index = i;
//         const element = numbers[index];
//         if(element % 2 !== 0){

//         }
// 
// const myYouNumbers = [12, 65, 45, 78, 45, 91];
// getOddNumbersOfAnArray(myYouNumbers);
// getSumOfAnArray(myYouNumbers);

// প্রাকটিস প্রব্লেম- ৫ খানা 

// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

// // ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 


// // const num = Math.max(99, 66, 88, 90);
// // console.log(num);


// // const num2 = Math.min(99, 66, 88, 90);
// // console.log(num2);


// function maxInArray(numbers){   
//     let largest = numbers[0];
//     for( let i = 0; i < numbers.length; i++){
//          const index = i;
//          const element = numbers[index];
//          if(element > largest){
//              largest = element;
//          }
//     }
//     return largest;
//  }
 
//  const height = [167, 190, 120, 165, 137, 461];
//  const tallest = maxInArray(height);
//  console.log('tallest', tallest);


// const names =  ['babul', 'sabul', 'dabul', 'nibul', 'kibul', 'dabul', 'nibul', 'babul', 'babul' ];

// function remoteDuplicate(names){
//     const unique = []
//     for(let i = 0; i < names.length; i++){
//         const name = names[i];
//         console.log(name);
//         if(unique.includes(name) === false){
//             unique.push(name);
//         }
//     } 
//     return unique;
// }

// const uniqueNames = remoteDuplicate(names);
// console.log(uniqueNames);


// function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairWood = chairQuantity * perChairWood;
//     const tableWood = tableQuantity * perTableWood;
// //     const bedWood = bedQuantity * perBedWood;

// //     const totalWood = chairWood + tableWood + bedWood;
// //     return totalWood;
// // }

// // const totalWood = woodCalculator(2, 90, 5);
// // console.log('total wood ', totalWood);
 


// const phones = [
//     {name: 'Samsung', camera: '12', storage: '32gb', price: 36000, color: 'silver' },
//     {name: 'walton', camera: '10', storage: '32gb', price: 22000, color: 'silver' },
//     {name: 'iphone', camera: '10', storage: '32gb', price: 76000, color: 'silver' },
//     {name: 'vivo', camera: '10', storage: '32gb', price: 20000, color: 'silver' },
//     {name: 'Oppo', camera: '12', storage: '32gb', price: 44000, color: 'silver' },
//     {name: 'Nokia', camera: '12', storage: '32gb', price: 55000, color: 'silver' },
//     {name: 'HTC', camera: '12', storage: '32gb', price: 900000, color: 'silver' }
// ]

// function cheapestPhone(phones){
//     let cheapest = phones[0];
//     for(let i = 0; i < phones.length; i++){
//         const index = i;
//         const phone = phones[index]; 
//         // console.log(phone);
//         if(phone.price < cheapest.price){
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }

// const mySelection = cheapestPhone(phones);
// console.log(mySelection);


// const  shoppingCart = [
//     {name: 'shoe', price: 1200},
//     {name: 'shirt', price: 1100},
//     {name: 'pant', price: 700},
//     {name: 'belt', price: 150},
//     {name: 'tupi', price: 110},
// ];

// function totalCost(products){
//     for(let i = 0; i < products.length; i++){
//         const index = i;
//         const product = products[index];
//         console.log(product);
//     }
// }

// const expense = totalCost(shoppingCart);
// console.log('total cost', expense);


// const  shoppingCart = [
//     {name: 'shoe', price: 1200},
//     {name: 'shirt', price: 1100},
//     {name: 'pant', price: 700},
//     {name: 'belt', price: 150},
//     {name: 'tupi', price: 110},
// ];

// function totalCost(products){
//     let sum = 0; 
//     for(let i = 0; i < products.length; i++){
//         const index = i;
//         const product = products[index];
//         sum = sum + product.price;
//         // console.log(product);
//     }
//     return sum;
// }

// const expense = totalCost(shoppingCart);
// console.log('total cost', expense);



// const  shoppingCartt = [
//     {name: 'shoe', price: 1200, quantity: 2},
//     {name: 'shirt', price: 1100, quantity: 3},
//     {name: 'pant', price: 700, quantity: 5},
//     {name: 'belt', price: 150, quantity: 6},
//     {name: 'tupi', price: 110, quantity: 11},
// ];

// function totalCost(products){
//     let sum =0; 
//     for(let i = 0; i < products.length; i++){
//         const index = i;
//         const product = products[index];
//         const productTotal = product.price * product.quantity;
//         sum = sum + productTotal;
//         // console.log(product);
//     }
//     return sum;
// }

// const expenses = totalCost(shoppingCartt);
// console.log('total cost', expenses);





// function ticketPrice(ticketQuantity){
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const restTicketRate = 71;

//     if(ticketQuantity <= 100){
//         const price = ticketQuantity * first100Rate;
//         return price;
//     }
//     else if(ticketQuantity <= 200){
//         const first100Price = 100 * first100Rate;
//         const restTicketQuantity = ticketQuantity - 100;
//         const restTicketPrice = restTicketQuantity * second100Rate;
//         const totalPrice = first100Price + restTicketPrice;
//         return totalPrice;
//     }
//     else{
//         const first100Price = 100 * first100Rate;
//         const second100price = 100 * second100Rate;
//         const restTicketQuantity = ticketQuantity - 200;
//         const restTicketPrice = restTicketQuantity * restTicketRate;
//         const totalCost = first100Price + second100price + restTicketPrice;
//         return totalCost;
//     }
// }


// const price = ticketPrice(261);
// console.log(price);


let sum = 0;
for(let i = 0; i <= 3; i++){
    // console.log(i);
    sum = sum + i;
    console.log(sum);
}



