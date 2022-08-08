// string = imeutable oporibortonjoggo


const userName = 'blackPink';
const userInput = 'blackPink';

console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user')
}
else{
    console.log('invalid user')
}

// chikon pin haria giyeche search + includes()

const lyrics = 'probittir golami koro na , jene bujhe probitti k onushoron koro na'
const doesExist = lyrics.includes('golami');
console.log(doesExist);


const searchString = 'goLami'
console.log(searchString);

const doesExistisOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(searchString);
console.log(doesExistisOneLine);

// achee naki nai

console.log(lyrics.indexOf('kala'));

if (lyrics.indexOf('sada') != -1){
    console.log('achee oikhane')
}
else{
    console.log('nai oikhane')
}


// startsWith
console.log(lyrics.startsWith('2mi'));

// endsWith
const fileName = 'mybiodata.pdf'
const otherFile = 'yourPic.png'

fileName.endsWith('.pdf');

// split join
const trueThink = 'Allah Shubhanahu otayala sey bekti k dekhe obak hoaa jan , jar moddehe probittir tarona nai . probittir golami kora mane loss. je eta bujhben a samanno moner shamoyek chahidar kache here jabe se asholei akta bolod..... ';
const parts = trueThink.split(' ');
const sentence = trueThink.split('.');
const char = trueThink.split('');
console.log(parts);
console.log(sentence);
console.log(char);

const partial = trueThink.slice(6, 18);
const partial2 = trueThink.substring(6, 17);

console.log(partial);
console.log(partial2);

const newSong =  trueThink.join('. ');
console.log(newSong);




// math  math  math

// -----------------

const result = Math.pow(3, 8);
console.log(result);


const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
console.log(gap);
if(gap < 5){
    console.log('probittir golami koro na')
}
else{
    console.log('ey valo laga Allah Shubhanahu otyala e toiri korechen, abr tini e nished korechen... tai jodi tini na diten taile tumi  e dike nojor e korte na ... tay nijeke shonjoto koro');
}

// ---------------
// 
// ---------------

const number = 2.6666;
const fullName = Math.round(number);
const result2 = Math.ceil(2.0000001);
const result3 = Math.floor(456.259);
console.log(fullName);

// -----------
// Random

console.log(Math.random());
// for purnno number
const random = Math.round(Math.random()*100);

for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}



// swap--===========
// =========

let first = 5;
let second = 7;
console.log(first, second);

// first = second;
// second = first;
const temp = first;
first = second;
second = temp;
// console.log(first, second);
// swap aproch 2


const num = Math.max(99, 66, 88, 90);
console.log(num);

// who is tallest

function maxInArray(numbers){   
   let largest = numbers[0];
   for( let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
   }
   return largest;
}

const height = [167, 190, 120, 165, 137];
const tallest = maxInArray(height);
console.log('tallest', tallest);


