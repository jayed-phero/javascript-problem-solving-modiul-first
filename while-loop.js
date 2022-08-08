// while loop example 1

var roasGiven = 0 ;

while( roasGiven < 7 ) {
    console.log("Roast den den , Please!")
   // roasGiven = roasGiven + 1;
    // roasGiven += 1;
    roasGiven++;
}


/* 
 
1. Loop variable
2. condition inside while
3. Loop body
4. Change the Loop variable

*/

var number = 0;
while(number < 10) {
    console.log(number);
    number++;
}



var number = 0;
while(number <= 10) {
    console.log(number);
    number = number + 2;
}

//  ODD number

var number = 1;
while(number <= 10) {
    console.log(number);
    number = number + 2;
}


// for loop
for(var roasGiven = 0; roasGiven < 7 ; roasGiven++ ) {
    console.log("roast den den , Please !!");
}


// simple version of for loop
for (var i = 0; i < 7 ; i++){
    console.log(i);
}

for(var i = 0; i < 10; i++){
    console.log(i);
}


for(var i = 0; i < 10; i+=1){
    console.log(i);
}



// target : display every elements of an array

var numbers = [45, 55, 99, 90, 56];

for(var i = 0;  i < 7; i++){
    var number = numbers[i];
    console.log(number);                                                                                                                
}

var numbers = [45, 55, 99, 90, 56];

for(var i = 0;  i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
}


var items = ['bottle', 'mouse', 'simglass', 'pen'];

for(var i = 0; i < items.length; i++){
    var items = items[i];
    console.log(items);
}



// break

for(var i = 1; i <= 20; 1++){
    console.log(i);
    if(i > 5){
        break;
    }
}


var roastGiven = 0;
while(roastGiven < 10){
    console.log('roast den gift  item ansi ');
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
}


// continue 

var numbers = [45, 87, 98, 56, 66, 36, 25, 31];

for(var i = 0; i < number.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}


// reversr 

var num = 0;

while(num < 10) {
    console.log(num);
    num++;
}


var num = 10;

while(num >= 1) {
    console.log(num);
    num--;
}

for(var i = 10; i >= 1; i--){
    console.log(i);
}